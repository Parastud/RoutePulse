import mongoose from 'mongoose';
mongoose.set('debug', true);

const connectDB = async () => {
    try {
        await mongoose.connect(`PROCESS.ENV.MONGO_URI`);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

connectDB();
