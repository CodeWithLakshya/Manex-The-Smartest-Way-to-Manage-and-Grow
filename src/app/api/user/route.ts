import { NextResponse } from "next/server";

export async function GET() {

    const user = {
        userId: "100001",
        name: "Lakshya",
        password: "abc",
        role: "ADMIN"
    }

    return NextResponse.json(user);
}