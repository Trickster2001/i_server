import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb://127.0.0.1:27017/quiz")
    console.log("Database Connected")
}