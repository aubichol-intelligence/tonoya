import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // const token = req.cookies.get("authToken")?.value;
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth_token='))
        ?.split('=')[1];
    // const isAuthenticated = Boolean(req.cookies.get("auth_token"));

    // Redirect unauthenticated users from protected routes
    if (req.nextUrl.pathname.startsWith("/protected") && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/protected/:path*"], // Protect all routes under `/protected`
};
