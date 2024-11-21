import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    // Mock user registration (Replace with real logic)
    const newUser = { email: body.email, password: body.password };
    console.log("Registered user:", newUser);

    return NextResponse.json({ success: true, message: "Registration successful" }, { status: 201 });
}
