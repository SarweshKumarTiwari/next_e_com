import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import purchaseModel from "@/models/purchase";
import user from "@/models/user";
import product from "@/models/product";

export async function GET (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const params=req.nextUrl.searchParams;
        const sellerId=params.get("sellerid");
        if (!sellerId) {
            throw new ApiError(400,"no seller id found");
        }
        const sales=await purchaseModel
            .find({seller:sellerId})
            .populate({
                path:"user",
                select:"name",
                model:user
            }).populate({
                path:"product",
                select:"-seller ",
                model:product
            })
        return NextResponse.json({success:sales},{status:200})
    })(req)
}