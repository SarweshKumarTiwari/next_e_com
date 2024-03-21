import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import productModel from "@/models/product";
import { NextRequest, NextResponse } from "next/server";


export async function GET (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const product=await productModel.find();
        return NextResponse.json({success:product},{status:200})
    })(req)
}