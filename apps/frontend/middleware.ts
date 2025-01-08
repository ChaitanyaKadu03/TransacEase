import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {

    if (req.nextUrl.pathname.startsWith('/api/user') && !await getToken({ req, secret: process.env.AUTH_SECRET })) {
        const loginUrl = new URL("/api/auth/signin", req.url);
        return NextResponse.redirect(loginUrl);
      }

    if (req.nextUrl.pathname.startsWith('/api/auth')) {
        const token = await getToken({
            req,
            secret: process.env.AUTH_SECRET,
        });        

        if (token) {
            const dashboardUrl = new URL("/api/user/dashboard", req.url);
            return NextResponse.redirect(dashboardUrl);
        }
    }

    return NextResponse.next();
}

// Above code has several bugs. If u will observe carefull the redirect is causing multiple fetch even when not needed