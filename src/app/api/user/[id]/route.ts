import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const users = [
        {
            userId: "100001",
            name: "Lakshya",
            password: "abc",
            role: "ADMIN"
        },
        {
            userId: "100002",
            name: "Muskan",
            password: "abc1",
            role: "PARTNER"
        },
        {
            userId: "100003",
            name: "Aditya",
            password: "abc2",
            role: "STAFF"
        },
        {
            userId: "100004",
            name: "Ashutosh",
            password: "abc3",
            role: "ARTICLE"
        },
        {
            userId: "100005",
            name: "Kavy",
            password: "abc4",
            role: "ARTICLE"
        }
    ];

    const user = users.find((u) => u.userId === id);

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}
