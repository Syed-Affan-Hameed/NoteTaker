import mongoose from "mongoose";
import dotenv from "dotenv";


export const connectMongoDb = async()=>{
    try {
        const databaseConnect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection successfull");
        return true;
    } catch (error) {
        console.log("MongoDB Connection Error!",error);
        return false;
    }
}