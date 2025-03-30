import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user"

// to Login the user based on login credentials
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId') as string | null;
    const password = searchParams.get('password') as string | null;

    const userIdRegex = /^\d{6}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=(?:[^@#$%]*[@#$%]){2})(?=(?:[^0-9]*[0-9]){2})[A-Za-z0-9@#$%]{8,}$/;

    const errors: string[] = []
    const messages: string[] = []

    if (!userId || !userIdRegex.test(userId)) {
        errors.push('Invalid userId. It must be 6 numeric characters.');
    }

    if (!password || !passwordRegex.test(password)) {
        errors.push('Invalid password. It must be at least 8 characters long, including 1 capital alphabet, 2 special symbols (@, #, $, %), 2 numerics and rest alphabets (whether small or capital).');
    }

    try {

        await connectDB()

        messages.push('Validation Successful')
        messages.push('MongoDB Connected Successfully!')

        const user = await User.findOne({ userId: userId })

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        if (!(user.password === password)) {
            errors.push('Password not matched')
            if (errors.length > 0) {
                return new Response(JSON.stringify({ errors }), { status: 404, headers: { 'Content-Type': 'application/json' } });
            }
        }

        messages.push('User Is Authenticated To Login')

        return NextResponse.json({ messages, user }, { status: 200 });

    } catch (error) {
        errors.push('Database Connection Failed')
    }

    return new Response('Validation successful', { status: 200 });
}

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name') as string | null;
    const password = searchParams.get('password') as string | null;
    const cpwd = searchParams.get('cpwd') as string | null;
    const email = searchParams.get('email') as string | null;
    const mobile = searchParams.get('mobile') as string | null;

    const errors: string[] = []
    const messages: string[] = []

    try {
        await connectDB()

        messages.push('MongoDB Connected Successfully!')

        const user = {
            userId: "100002",
            name: name,
            password: password,
            cpwd: cpwd,
            email: email,
            mobile: mobile
        }
        const newUser = new User(user);
        await newUser.save();

        return NextResponse.json({ user, message: "User inserted" }, { status: 200 })
    } catch (error) {
        errors.push('Database Connection Failed')
    }

    return new Response('User created successfully', { status: 200 });
}