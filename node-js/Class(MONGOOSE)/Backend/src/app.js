const express = require("express")
const cors = require("cors")
const {connectionWithDb} = require('./config/database')
const {Student} = require("./models/user")

const app = express()

app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.post("/adduser" , async(req , res)=>{
    const user = await Student(req.body)
    res.send("user added")
    console.log(user);
    user.save()
})

app.get("/getallusers" , async(req , res)=>{
    const user = await Student.find({})
    console.log(user);
    res.send(user)
})

app.get("/getsingleuser/:id" , async (req , res) => {
    const id = req.params.id
    const user = await Student.findById(id)
    res.send(user)
})

app.delete("/deleteone/:id" , async(req , res)=>{
    const id = req.params.id
    console.log(id);
    const user = await Student.deleteOne({_id : id})
    console.log(`user deleted ${user}`);
    res.send("user deleted")
})

app.patch("/updateuserinfo/:id", async(req , res)=>{
    const id = req.params.id
    const updatedData = req.body
    
    const user = await Student.findByIdAndUpdate(id , updatedData ,{
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