import ApiError from "@/lib/error";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export default function authHandler(req:NextRequest){
    const cookie=req.cookies.get("at");
    if (!cookie?.value) {
        throw new ApiError(400,"unauthorised");
    }
    const data=jwt.verify(cookie.value,process.env.ACCESS_TOKEN as string);
    return JSON.parse(data as string);
}