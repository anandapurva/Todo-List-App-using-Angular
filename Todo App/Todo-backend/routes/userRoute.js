const express = require('express')
const userRouter = express.Router() 
const { userLogin ,userSignUp} = require("../controller/userCon");

userRouter.post('/login', userLogin)
userRouter.post('/signup', userSignUp)

module.exports = userRouter;