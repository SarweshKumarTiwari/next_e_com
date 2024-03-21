import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import purchaseModel from "@/models/purchase";
import product from "@/models/product";

export async function GET (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const query=req.nextUrl.searchParams
        const sellerId=query.get("seller")
        if (!sellerId) {
            throw new ApiError(400,"no seller provided")
        }
        const unshipped=await purchaseModel.find({
            _id:sellerId,
            isShipped:false
        }).populate(
            {
                path:"product",
                select:"title price",
                model:product
            }
        ).select("-user -seller -total");
        return NextResponse.json({success:unshipped},{status:200})
    })(req)
}