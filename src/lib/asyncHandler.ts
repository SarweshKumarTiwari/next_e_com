import { NextRequest, NextResponse } from "next/server";
import ApiError from "./error";
import connectDb from "../lib/mongodb"
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export default function asyncHandler(fn:(req: NextRequest) => Promise<NextResponse>) {
    return async function (req:NextRequest){
        try {
            await connectDb();
            return await fn(req);
        } catch (error) {
            if (error instanceof ApiError) {
                return NextResponse.json({ error: error.message }, { status: error.status })
            }
            if (error instanceof JsonWebTokenError) {
                return NextResponse.json({ error:"user not authentic"}, { status: 400})
            }
            if(error instanceof TokenExpiredError){
                return NextResponse.json({ error:"access token expired" }, { status: 400})
            }
            return NextResponse.json({ error: error }, { status: 500 });
        }
    }
}