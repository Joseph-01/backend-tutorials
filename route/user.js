const userRouter = require('express').Router();

const {createUser, getAllUsers, getUserById} = require('../controller/user');

userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
module.exports = {
    userRouter
};