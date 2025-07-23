const express = require("express")
const {connectionWithDatabase} = require("./config/database")
const app = express()
app.use(express.json())




connectionWithDatabase()
.then(()=>{
    console.log("WE CONNECT TO THE DATABASE SUCCESSFULLY");
})
.catch(()=>{
    console.log("Not Connected");
})

app.listen(5000 , (res)=>{
    console.log("server listen on port 5000")
})