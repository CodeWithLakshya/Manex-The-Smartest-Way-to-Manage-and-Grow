import { connectDB } from "@/app/lib/mongodb"
import User from "@/app/models/user"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()
        const users = await User.find()
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed",error1: error }, { status: 500 })
    }
}
