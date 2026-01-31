const { User } = require('../model/user');

const createUser = async (req, res) => {
    try {
        //get the body from thunder client using request
        const data = req.body;
        //create a user object using the data we got 
        // and passing it through our model to give a structure
        const newUser = new User(data);
        //we will call save on our new object and save it to the database
        const result = await newUser.save();
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ "errorMessage": error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ "errorMessage": error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await User.findById(id)
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ "errorMessage": error.message });
    }
}

module.exports = { createUser, getAllUsers, getUserById };