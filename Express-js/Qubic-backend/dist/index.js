import dotenv from "dotenv";
import express from "express";
import { applyMiddlewares } from "./middlewares/main.js";
import { connectWithDb } from "./config/conectdb.js";
dotenv.config();
const app = express();
applyMiddlewares(app);
connectWithDb();
app.listen(process.env.PORT, () => {
    console.log("SERVER RUNNING " + process.env.PORT);
});
