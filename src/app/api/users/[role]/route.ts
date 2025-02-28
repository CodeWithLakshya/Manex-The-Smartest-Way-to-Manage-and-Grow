import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { role: string } }) {
    const { role } = params;

    if (!role) {
        return NextResponse.json({ error: "Role is required" }, { status: 400 });
    }

    const users = [
        {
            userId: "100001",
            name: "Lakshya",
            password: "abc",
            role: "ADMIN"
        }
        , {
            userId: "100002",
            name: "Muskan",
            password: "abc1",
            role: "PARTNER"
        }
        , {
            userId: "100003",
            name: "Aditya",
            password: "abc2",
            role: "STAFF"
        }
        , {
            userId: "100004",
            name: "Ashutosh",
            password: "abc3",
            role: "ARTICLE"
        }
        , {
            userId: "100005",
            name: "Kavy",
            password: "abc4",
            role: "ARTICLE"
        }
    ]

    const filteredUsers = users.filter((u) => u.role.toLowerCase() === role.toLowerCase())

    if (filteredUsers.length === 0) {
        return NextResponse.json({ error: "No users found with this role" }, { status: 404 })
    }

    return NextResponse.json(filteredUsers)
}
