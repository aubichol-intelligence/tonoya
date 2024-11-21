import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("authToken");
    if (!token && req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/register") {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
}
