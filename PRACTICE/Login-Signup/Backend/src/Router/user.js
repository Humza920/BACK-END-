const express = require("express")
const {Users} = require("../model/users")
const userRouter = express.Router()
const userauth = require("../middleware/authmiddle")

userRouter.get("/getuser" , userauth , async(req , res)=>{
    try {
        const user = req.user
        if (!user) {
            throw new Error("User not found");
        } else {
            res.send(user)
        }
    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
})

module.exports = userRouter