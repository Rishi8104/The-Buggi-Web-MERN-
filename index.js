import express from "express";
import "dotenv/config";
import { configerDb} from "./SRC/Configs/Dbconfig.js";
import ResturentRouter from "./SRC/Router/Resturentrouter.js";



const app= express(); 
app.use(express.json());
app.use(ResturentRouter);



app.listen(process.env.SERVER_PORT,() => {

    console.log("Server listion on Port nu " + process.env.SERVER_PORT);
    configerDb();
})