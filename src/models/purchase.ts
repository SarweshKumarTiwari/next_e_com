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
        default: false
    },
    seller: {
        type:mongoose.Types.ObjectId,
        ref:"sellers",
        required:true
    }
},
    {
        timestamps: true
    }
)
export default mongoose.models.purchases||mongoose.model("purchases",purchase);