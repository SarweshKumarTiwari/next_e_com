import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import userModel from "@/models/user"
import authHandler from "@/handlers/authHandler";

export async function  POST(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json();
        if (!(body.email&&body.password)) {
            throw new ApiError(400,"no valid email or password");
        }
        const user=await userModel.findOne({email:body.email});
        if (!user||!(await user.compare(body.password))) {
            throw new ApiError(400,"no user found or incorrect password");
        }
        const response=NextResponse.json({
            success:"logged"
        },{status:200})
        response.cookies.set("at",user.accessToken());
        return response;
    })(req);
}

export async function DELETE(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const user=authHandler(req);
        console.log(user);
        if (!user) {
            throw new ApiError(400,"user not authentic");
        }
        const response=NextResponse.json({success:"logged out"},{status:200});
        response.cookies.set("at","");
        return response;

    })(req);
}