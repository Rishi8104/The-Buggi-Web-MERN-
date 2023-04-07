import mongoose from "mongoose";
import "dotenv/config";

 export async function configerDb() {
    try {
        mongoose.set('strictQuery', false)
       await mongoose.connect(process.env.DB_URL)
       console.log("DB connection established !!");
    } catch (error) {
        console.log(error);
        
    }
}