import { Router } from "express";

const routes = Router();


routes.get("/", (req,res)=>{
    res.send("The server is on!");
})


export default routes;