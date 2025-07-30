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

userRouter.get("/getallusers" , userauth , async(req , res)=>{
    try {
        const users = await Users.find({})
        if (!users) {
            throw new Error("Error fetching users");
        } else {
            res.send({
                message : "SUCCESS",
                users
            })
        }
    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
})


module.exports = userRouter