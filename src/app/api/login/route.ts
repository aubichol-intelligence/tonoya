import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    // Mock user authentication (Replace with real logic)
    const users = [{ email: "user@example.com", password: "password123" }];
    const user = users.find((u) => u.email === body.email && u.password === body.password);

    if (user) {
        return NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
    } else {
        return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }
}
