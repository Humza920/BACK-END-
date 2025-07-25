import dotenv from "dotenv";
import  express , { Application }   from "express"
import  {applyMiddlewares}  from "./middlewares/main.js";
import { connectWithDb } from "./config/conectdb.js";
dotenv.config()

const app : Application = express()
applyMiddlewares(app)


connectWithDb()
app.listen(process.env.PORT , ()=>{
    console.log("SERVER RUNNING " + process.env.PORT);
})
