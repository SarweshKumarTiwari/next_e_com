import mongoose, { Schema } from "mongoose";

const purchase = new Schema({
    total: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"users",
        required: false
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref:"products",
        required: true,
    },
    isShipped: {
        type: Boolean,
        required: false
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
export default mongoose.model("purchases",purchase);