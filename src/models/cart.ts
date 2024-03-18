import mongoose, { Schema } from "mongoose";

const cart = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref:"users",
        required: true
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"products",
        required:true
    },
    qty:{
        type:Number,
        default:1
    }
    
},
    {
        timestamps: true
    }
)
export default mongoose.model("carts",cart);