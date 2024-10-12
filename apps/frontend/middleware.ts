import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/api/user')) {

        const token = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET,
        });

        if (!token) {
            const loginUrl = new URL("/api/auth/signin", req.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    if (req.nextUrl.pathname.startsWith('/api/auth')) {
        const token = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET,
        });

        if (token) {
            const dashboardUrl = new URL("/api/user/dashboard", req.url);
            return NextResponse.redirect(dashboardUrl);
        }
    }

    // if (req.nextUrl.pathname == '/') {
    //     const loginUrl = new URL("/api/auth/signin", req.url);
    //     return NextResponse.redirect(loginUrl);
    // }

    return NextResponse.next();
}