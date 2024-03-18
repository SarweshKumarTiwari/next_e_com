import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import cartModel from "@/models/cart"
import authHandler from "@/handlers/authHandler";

export async function POST(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        if (!(body.user&&body.product)) {
            throw new ApiError(400,"please provide user and product");
        }
        await new cartModel(body).save();
        return NextResponse.redirect("/cart");
    })(req)
}

export async function GET(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const user=authHandler(req);
        const cart= await cartModel.find({_id:user._id}).populate("product").exec();
        return NextResponse.json({success:cart},{status:200});
    })(req)
}

export async function PUT(req:NextRequest) {
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        if (!(body.qty&&body.user)) {
            throw new ApiError(400,"no update params");
        };
        await cartModel.findByIdAndUpdate(body.user,{qty:body.qty});
        return NextResponse.json({success:"updated"},{status:200});
    })(req)
}

export async function DELETE(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const user=authHandler(req);
        await cartModel.findByIdAndDelete(user._id);
        return NextResponse.json({success:"deleted cart"},{status:200})
    })(req)
}