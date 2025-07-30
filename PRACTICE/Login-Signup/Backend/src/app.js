const express = require("express")
require("dotenv").config()
const { connectionWithDatabase } = require("./config/database")
const appRouter = require("./Router/auth")
const userRouter = require("./Router/user")
const cors = require("cors")
const cookieparser = require("cookie-parser")
const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true ,
}))


app.use('/auth', appRouter)
app.use('/user',userRouter)

connectionWithDatabase()
    .then(() => {
        console.log("WE CONNECT TO THE DATABASE SUCCESSFULLY");
    })
    .catch(() => {
        console.log("Not Connected");
    })

app.listen(process.env.PORT , (res)=>{
    console.log("server is listening")
})