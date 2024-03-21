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
    stocks:[
    {
        product:{
            type:mongoose.Types.ObjectId,
            ref:"shippings",
            required:false
        },
        stock:{
            type:Number,
            required:false
        },
    }
    ]
 },{
    timestamps:true
 })

 export default mongoose.models.sellers||mongoose.model("sellers",seller)