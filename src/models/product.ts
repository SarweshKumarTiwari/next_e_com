import mongoose, { Schema } from "mongoose";

const product = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    seller: {
        type:mongoose.Types.ObjectId,
        ref:"sellers"
    }
},
    {
        timestamps: true
    }
)
export default mongoose.models.products||mongoose.model("products",product);