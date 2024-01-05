import { Router } from "express";
import userController from "./controllers/userController";
import authorization from "./middlewares/authorization";

const routes = Router();


routes.get("/", (req,res)=>{
    res.send("The server is on!");
})

// login
routes.post("/login", userController.login);



// rotas do usuário
routes.get("/users", authorization, userController.show);

routes.get("/users/:email", userController.findOne);
routes.post("/users", userController.createOne);
routes.put("/users", userController.updateOne);
routes.delete("/users", userController.deleteOne);

export default routes;