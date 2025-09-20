import { connectDB } from "@/app/lib/mongodb"
import Client from "@/app/models/client"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()
        const clients = await Client.find()
        return NextResponse.json(clients)
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed",error1: error }, { status: 500 })
    }
}
