import { connectDB } from "@/app/lib/mongodb"
import Client from "@/app/models/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    try {
        await connectDB()
        const client = await Client.findOne({ clientId: id })
        if (!client) {
            return NextResponse.json({ error: "Client Not Found" }, { status: 404 })
        }
        return NextResponse.json(client)
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed", id: id }, { status: 500 })
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    try {
        await connectDB()
        const body = await req.json()
        const result = await Client.updateOne({ clientId: id }, { $set: body })
        if (result.matchedCount === 0) {
            return NextResponse.json({ error: "Client Not Found" }, { status: 404 })
        }
        return NextResponse.json({ message: "Client Updated Successfully" })
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed", id: id }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params
    try {
        await connectDB()
        const result = await Client.deleteOne({ clientId: id });
        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "Client Not Found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Client Deleted Successfully" })
    } catch (error) {
        return NextResponse.json({ error: "Database Connection Failed", id: id }, { status: 500 })
    }
}