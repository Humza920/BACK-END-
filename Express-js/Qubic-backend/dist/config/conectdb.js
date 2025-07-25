import mongoose from "mongoose";
export async function connectWithDb() {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri)
            throw new Error("❌ MONGO_URI not found in environment");
        await mongoose.connect(uri);
        console.log("✅ MongoDB connected");
    }
    catch (error) {
        console.log("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
}
