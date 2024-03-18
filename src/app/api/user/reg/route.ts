import asyncHandler from "@/lib/asyncHandler";
import ApiError from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import userModel from "@/models/user"
import { cookies } from "next/headers";


export async function POST(req:NextRequest){
    return await asyncHandler(async (req)=>{
        const body=await req.json()
        if (!(body.email&&body.name&&body.password)) {
            throw new ApiError(400,"please provide valid params")
        }
        if (await userModel.findOne({email:body.email})) {
            throw new ApiError(400,"user already exists")
        }
        const user=await new userModel(body).save();
        const access_token=user.accessToken();
        const cookieOps={
            httpOnly:true,
            secure:true,
            path:"/"
        }
        cookies().set("at",access_token,cookieOps);
        return NextResponse.json({
            success:"Registration complete"
        },{
            status:200
        }
        )
    })(req);
}