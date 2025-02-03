// require("dotenv").config({path:"./env"})

import dotenv from "dotenv";
import connectDB from "../src/db/index.js";
dotenv.config({ path: "./env" })
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("Express is not working properly")
            throw err
        })
        app.listen(process.env.PORT || 4000, () => {
            console.log(`server is listening on ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err);
    })





/* In this method of all code of db connection is in the index.js file 
import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express";
const app=express();
; (async () => {
try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (err) => {
        console.log("Express is not working properly")
        throw err
    })
    app.listen(process.env.PORT,()=>
    {
        console.log("Server is running on port :",process.env.PORT)
    })
}catch(e){
    console.error("Error : "+ERROR)
    throw err
}
})()
*/