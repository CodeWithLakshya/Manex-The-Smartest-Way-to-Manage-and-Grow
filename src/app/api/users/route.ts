import { NextResponse } from "next/server";

export async function GET() {

    const users = [
        {
            userId: 100001,
            name: "Lakshya",
            password: "abc",
            role: "ADMIN"
        }
        ,{
            userId: 100002,
            name: "Muskan",
            password: "abc1",
            role: "PARTNER"
        }
        ,{
            userId: 100003,
            name: "Aditya",
            password: "abc2",
            role: "STAFF"
        }
        ,{
            userId: 100004,
            name: "Ashutosh",
            password: "abc3",
            role: "ARTICLE"
        }
        ,{
            userId: 100005,
            name: "Kavy",
            password: "abc4",
            role: "ARTICLE"
        }
    ]

    return NextResponse.json(users);
}
