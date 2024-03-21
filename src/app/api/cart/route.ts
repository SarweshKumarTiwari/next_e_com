import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import cartModel from "@/models/cart"
import authHandler from "@/handlers/authHandler";
import product from "@/models/product";

export async function POST(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        body.user=authHandler(req).id;
        if (!(body.user&&body.product)) {
            throw new ApiError(400,"please provide user and product");
        }
        await new cartModel(body).save();
        return NextResponse.json({success:"added to cart"},{status:200});
    })(req)
}

export async function GET(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const user=authHandler(req);
        const cart= await cartModel.find({user:user.id}).populate({
            path:"product",
            select:" -createdAt -updatedAt",
            model:product
        });
        if (!cart) {
            throw new ApiError(400,"no elements found")
        }
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

export async function DELETE(req:NextRequest,){
    return await asyncHandler(async (req)=>{
        authHandler(req);
        const cartId=req.nextUrl.searchParams.get("cartid");
        await cartModel.findByIdAndDelete(cartId);
        return NextResponse.json({success:"deleted cart"},{status:200})
    })(req)
}