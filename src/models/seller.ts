import mongoose, { Schema } from "mongoose";

 const  seller= new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    },
    earning:{
        type:Number,
        default:0
    },
    shippments:[
        {
            type:mongoose.Types.ObjectId,
            ref:"shippings",
            required:false
        }
    ]
 },{
    timestamps:true
 })

 export default mongoose.model("sellers",seller)