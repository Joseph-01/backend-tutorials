const mongoose = require('mongoose');

const dburi = '';

const connectDB = async () => {
    try {
        await mongoose.connect(dburi);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
}


module.exports = { connectDB }
