import { connectDB } from "@/app/lib/mongodb"
import User from "@/app/models/user"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const { id } = await params

    const errors: string[] = []
    const messages: string[] = []

    try {
        await connectDB()
        const user = await User.findOne({ userId: id })
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }
        return NextResponse.json(user)
    } catch (error) {
        errors.push('Database Connection Failed')
        return NextResponse.json({ errors, id: id }, { status: 500 })
    }

}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {

    const { id } = await params

    const errors: string[] = []
    const messages: string[] = []

    try {
        await connectDB()
        const body = await req.json()
        const result = await User.updateOne({ userId: id }, { $set: body })
        if (result.matchedCount === 0) {
            errors.push("User not found")
            return NextResponse.json({ errors }, { status: 404 });
        }
        messages.push("User updated successfully")
        return NextResponse.json({ messages });
    } catch (error) {
        errors.push("Database Connection Failed")
        return NextResponse.json({ errors, id: id }, { status: 500 });
    }
}