import asyncHandler from "@/lib/asyncHandler";
import { NextRequest, NextResponse } from "next/server";
import purchaseModel from "@/models/purchase";
import sellerModel from "@/models/seller";
import productModel from "@/models/product";
import ApiError from "@/lib/error";
import authHandler from "@/handlers/authHandler";

export async function POST (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        if (!(body.total&&body.product&&body.seller)) {
            throw new ApiError(400,"some parameters not provided");
        };
        body.user=authHandler(req).id;
        const data=await new purchaseModel(body).save();
        const d=await productModel.findById(data.product);
        await sellerModel.updateOne(
            {
                _id:body.seller,
                "stocks.product":body.product
            },
            {
                $inc:{
                    earning:d.price,
                    "stocks.$.stock":-body.total
                }
            }
        )
        return NextResponse.json({success:'purchased succesfully'},{status:200})
    })(req)
}