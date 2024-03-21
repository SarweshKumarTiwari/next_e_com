import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import sellerModel from "@/models/seller";
import product from "@/models/product";

export async function GET (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const query=req.nextUrl.searchParams
        const sellerId=query.get("sellerid");
        if (!sellerId) {
            throw new ApiError(400,"no seller provided");
        }
        const stocks=await sellerModel.findById(sellerId).populate({
            path:"stocks.product",
            select:"-seller",
            model:product
        }).select("stocks");
        return NextResponse.json({success:stocks},{status:200});
    })(req);
}