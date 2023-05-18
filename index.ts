import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";


import userRouter from "./routes/user.route";

const app: Express = express();

// conexión a la DB con mongoose
mongoose.connect("mongodb://admin:admin@localhost:27017/crud-usuarios?authSource=admin")
.then(() => console.log("--- Conectado a la DB ---"))
.catch(err => console.log(err));

// Schema


// const testUser = new User({username: "ncardozoEY", password: "EY2023"});
/*
testUser.save()
    .then(doc => console.log(doc))
    .catch(err => console.log(err));
*/

// Middlewares
app.use(bodyParser.json())

// Routers
app.use("/users", userRouter);

app.listen(3000, () => {
    console.log("--- Listening port 3000 ---");
});