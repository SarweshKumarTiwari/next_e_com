import mongoose, { Schema } from "mongoose";

 const  stock= new Schema({
    seller:{
        type:mongoose.Types.ObjectId,
        ref:"sellers",
        required:true
    },
    products:[
        {
            product:{
                type:mongoose.Types.ObjectId,
                ref:"products"
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    ]
 },{
    timestamps:true
 })

 export default mongoose.model("stocks",stock)