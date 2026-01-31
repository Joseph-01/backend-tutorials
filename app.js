const express = require('express');
const app = express();
const port = 3000;

const { connectDB } = require('./dbconnection');
const {userRouter} = require('./route/user');

app.use(express.json());
app.use('/user', userRouter);


connectDB();
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});