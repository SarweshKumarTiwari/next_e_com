import { NextRequest,NextResponse } from "next/server";
import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import sellerModel from "@/models/seller"
import authHandler from "@/handlers/authHandler";
import productModel from "@/models/product";
import userModel from "@/models/user";

export async function POST (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=authHandler(req);
        if (await sellerModel.findOne({user:body.id})) {
            throw new ApiError(400,"you are already a seller")
        }
        await new sellerModel({user:body.id}).save();
        await userModel.findByIdAndUpdate(body.id,{
            type:1
        });
        return NextResponse.json({success:'now you are a seller'},{status:200})
    })(req)
}

export async function GET (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const user=authHandler(req);
        const seller=await sellerModel.findOne({user:user.id});
        if (!seller) {
            throw new ApiError(400,"no seller found");
        }
        return NextResponse.json({success:seller},{status:200})
    })(req)
}

export async function PUT (req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        if (!(body.price&&body.category&&body.seller&&body.title&&body.stock)) {
            throw new ApiError(400,"please provide price,category,seller and title")
        }
        const stock=body.stock;
        body.stock=undefined;
        const product=await new productModel(body).save();
        await sellerModel.findByIdAndUpdate(body.seller,{
            $push:{
                stocks:{
                    product:product._id,
                    stock:stock
                }
            }
        })
        return NextResponse.json({success:'added product'},{status:200});
    })(req)
}