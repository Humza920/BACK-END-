const express = require("express")
const {connectionWithDb} = require('./config/database')
const {User} = require("./models/user")

const app = express()

app.use(express.json())

app.post("/adduser" , async(req , res)=>{
    const user = await User(req.body)
    res.send("user added")
    console.log(user);
    user.save()
})

app.get("/getallusers" , async(req , res)=>{
    const user = await User.find({})
    console.log(user);
    res.send(user)
})

app.delete("/deleteone/:name" , async(req , res)=>{
    const name = req.params.name
    console.log(name);
    const user = await User.deleteOne({firstname : name})
    console.log(`user deleted ${user}`);
    res.send("user deleted")
})

app.patch("/updateuserinfo/:id", async(req , res)=>{
    const id = req.params.id
    const updatedData = req.body
    
    const user = await User.findByIdAndUpdate(id , updatedData ,{
        new : true
    })
    res.send("user updated" + user)
    console.log(user);
    
})

connectionWithDb().then(() => {
    console.log("Successfully connected to the Databse")
}).catch(() => {
    console.log("Database not connected");
})

app.listen(4000, () => {
    console.log(`🌐 Server running`);
});