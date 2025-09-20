import { connectDB } from "@/app/lib/mongodb"
import User from "@/app/models/user"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    try {
        await connectDB()
        const user = await User.findOne({ userId: id })
        if (!user) {
            return NextResponse.json({ error: "User Not Found" }, { status: 404 })
        }
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed",error1: error, id: id }, { status: 500 })
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    try {
        await connectDB()
        const body = await req.json()
        const result = await User.updateOne({ userId: id }, { $set: body })
        if (result.matchedCount === 0) {
            return NextResponse.json({ error: "User Not Found" }, { status: 404 })
        }
        return NextResponse.json({ message: "User Updated Successfully" })
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed",error1: error, id: id }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    try {
        await connectDB()
        const result = await User.deleteOne({ userId: id })
        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "User Not Found" }, { status: 404 })
        }
        return NextResponse.json({ message: "User Deleted Successfully" })
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed",error1: error, id: id }, { status: 500 })
    }
}
