import { connectDB } from "@/app/lib/mongodb"
import User from "@/app/models/user"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const resolvedParams = await params
    const { id } = resolvedParams

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
