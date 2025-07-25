import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
export const applyMiddlewares = (app) => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(morgan("dev"));
};
