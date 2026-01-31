const mongoose = require('mongoose');

const dburi = 'mongodb+srv://user:joseph123@cluster0.zxhb1xh.mongodb.net/?appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(dburi);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
}

module.exports = { connectDB }