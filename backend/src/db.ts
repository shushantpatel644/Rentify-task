import mongoose, { ConnectOptions } from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/rentify';

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
