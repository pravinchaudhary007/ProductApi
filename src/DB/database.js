import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const db = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log('Database is connected successfully');
    } catch (error) {
        console.error('Mongoose connection error:', error.message); 
    }
};

export default db;
