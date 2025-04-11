import { connectDB } from "@/app/lib/mongodb";
import Client from "@/app/models/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const body = await req.json()
        await Client.insertOne(body)
        return NextResponse.json({message: "Client created successfully!"}, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed" }, { status: 500 });
    }
}