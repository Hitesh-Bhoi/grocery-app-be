import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const env = process.env;

export const connectDB = async()=>{
    try {
        await mongoose.connect(env.MONGO_URI);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log("Error while connecting to database", error);
    }
};