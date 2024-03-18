import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import userModel from "@/models/user"

type params={
    params:{
        userId?:string
    }
}
export async function DELETE(req:NextRequest,{params}:params){
    return await asyncHandler(async ()=>{
        if (!params.userId) {
            throw new ApiError(400,"no parameters are given");
        }
        await userModel.findByIdAndDelete(params.userId);
        return NextResponse.json({success:"user deleted"},{status:200})
    })(req);
}

export async function GET(req:NextRequest,{params}:params) {
    return await asyncHandler(async ()=>{
        if (!params.userId) {
            throw new ApiError(400,"no parameters are given");
        }
        console.log(params.userId);
        const user=await userModel.findById(params.userId);
        return NextResponse.json({success:user},{status:200})
    })(req);
}