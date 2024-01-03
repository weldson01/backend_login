import { Router } from "express";
import userController from "./controllers/userController";

const routes = Router();


routes.get("/", (req,res)=>{
    res.send("The server is on!");
})

// rotas do usuário
routes.get("/users", (req,res)=>{
    userController.show(req,res);
});

routes.post("/users", userController.createOne);
routes.put("/users", userController.updateOne);

export default routes;