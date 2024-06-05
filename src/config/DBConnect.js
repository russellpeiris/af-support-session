import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        if(!uri){
            throw new Error("Mongo URI is missing");
        }

        const connection = await mongoose.connect(uri);
        console.log("Connected to the database", connection.connection.host);
        
    } catch (error) {
        console.log("Error while connecting to the database", error);
        process.exit(1);
    }
};