import express, { Express, NextFunction, Request, Response, request } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";


import userRouter from "./routes/user.route";
import { ApiError } from "./errors/api.error";

const app: Express = express();

// conexión a la DB con mongoose
mongoose.connect("mongodb://admin:admin@localhost:27017/crud-usuarios?authSource=admin")
    .then(() => console.log("--- Conectado a la DB ---"));

// Middlewares
app.use(bodyParser.json())

// Routers
app.use("/users", userRouter);

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({message: `No existe la URL ${req.url}`});
});

app.use((err: ApiError, req:Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({message: err.message});
});

// Manejo de errores
process.on("unhandledRejection ", (err) => {
    console.log(err.message);
    process.exit(1)
 });

app.listen(3000, () => {
    console.log("--- Listening port 3000 ---");
});