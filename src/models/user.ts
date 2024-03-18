import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

interface User{
    name:string
    email:string
    password:string
    refresh_token:string
    type:number
}

interface userMethods{
    compare(password:string):Promise<boolean>
    refreshToken():string
    accessToken():string
}
const user = new Schema<User,{},userMethods>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true
    }
)

user.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password= await bcrypt.hash(this.password,8);
})

user.methods.compare=async function(password:string){
    return await bcrypt.compare(password,this.password);
}

user.methods.accessToken=function(){
    const access_token=jwt.sign({
        id:this._id,
        name:this.name,
        type:this.type,
    },process.env.ACCESS_TOKEN as string,{
        expiresIn: Math.floor(Date.now()/1000)+Number(process.env.ACCESS_LIMIT)
    });
    return access_token;
}



export default mongoose.models.users||mongoose.model("users",user);