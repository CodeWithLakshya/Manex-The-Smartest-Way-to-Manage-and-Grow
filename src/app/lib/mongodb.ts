import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/Manex";
// mongodb://localhost:27017/

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Maintain a cached connection
const cached = (global as any).mongoose || { conn: null, promise: null };
// const cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = (global as any).mongoose || { conn: null, promise: null };


export const connectDB = async (): Promise<typeof mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI) // ✅ No need to pass { dbName: "Manex" } separately
      .then((mongooseInstance) => {
        console.log("✅ MongoDB connected successfully to Manex database");
        return mongooseInstance;
      })
      .catch((error) => {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

// Store connection globally in development mode
if (process.env.NODE_ENV !== "production") {
  (global as any).mongoose = cached;
}
