import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import productModel from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        if (!(body.price&&body.category&&body.seller&&body.title)) {
            throw new ApiError(400,"please provide price,category,seller and title")
        }
        await new productModel(body).save();
        return NextResponse.json({success:'added product'},{status:200});
    })(req);
}

export async function GET (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const product=await productModel.find();
        return NextResponse.json({success:product},{status:200})
    })(req)
}