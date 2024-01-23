import { Router } from "express";
import userController from "./controllers/userController";
import authorization from "./middlewares/authorization";
import postController from "./controllers/postController";
import authorizationAdmin from "./middlewares/authorizationAdmin";

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
routes.delete("/users", authorizationAdmin, userController.deleteOne);


// rotas de posts

routes.get("/posts", postController.showAll);
// routes.get("/post/:userId",authorization, postController.showUserPost);
routes.post("/posts",authorization, postController.create);
// route update a post
routes.put("/posts/:id", postController.updateOnePost);
export default routes;