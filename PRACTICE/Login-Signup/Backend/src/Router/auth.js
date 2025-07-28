const express = require("express")
const {Users} = require("../model/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const appRouter = express.Router()


appRouter.post("/signup", async (req, res) => {
    try {
        const { firstname, lastname, email, password, gender } = req.body
        if (!firstname || !lastname || !gender) {
            throw new Error("FILL ALL THE FIELDS");
        }
        else if (!email) {
            throw new Error("ENTER YOUR EMAIL");
        }
        else if (!password) {
            throw new Error("ENTER YOUR PASSWORD")
        }

        const hashedpass = await bcrypt.hash(password, Number(process.env.HASH_PASS))

        const user = await new Users({
            firstname,
            lastname,
            email,
            password: hashedpass,
            gender
        })
        await user.save()
        

        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.send('User Added Successfully !')
    } catch (error) {
        res.status(400).send("Error: " + error.message)

    }
})

appRouter.post("/login" , async(req , res)=>{
    try {
        const  {email , password} = req.body
    const user = await Users.findOne({email})
    if (!user) {
        throw new Error("User not found signup first !");
    }
    const isPassvalid = await bcrypt.compare(password , user.password)
    if (isPassvalid) {
        const token = await jwt.sign({id:user._id} , process.env.SECRET_KEY , {expiresIn:"1d"})

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        })
         res.send(user)
    }else{
        throw new Error("Invalid Credentials !");
    }

    } catch (error) {
        res.status(400).send("Error: " + error.message)
    }
})

appRouter.post("/logout" , async(req , res)=>{
    res.clearCookie("token")
    res.send("logout successfull")
})

module.exports = appRouter
