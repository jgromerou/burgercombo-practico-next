import mongoose from "mongoose";

 if (!process.env.MONGODB_URI) {
    throw new Error('Falta la variable de entorno MONGODB_URI');
}

let cached = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

export async function connectDB() {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
}