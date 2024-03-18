import { NextRequest,NextResponse } from "next/server";
import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import sellerModel from "@/models/seller"
import authHandler from "@/handlers/authHandler";

export async function POST (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        if (!(body.user)) {
            throw new ApiError(400,"no user id")
        }
        await new sellerModel(body).save();
        return NextResponse.json({success:'now you are a seller'},{status:200})
    })(req)
}

export async function GET (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const user=authHandler(req);
        const seller=await sellerModel.findOne({user:user._id});
        return NextResponse.json({success:seller},{status:200})
    })(req)
}