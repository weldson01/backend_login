import postModel from "../models/postModel";

class postController {
    async create(req,res){
        const {title, body, userId} = req.body;

        const newPost = await postModel.create({title, body, UserId:userId})

        if(!newPost){
            return res.json({message: "There is some error with your request."});
        }

        return res.json(newPost);
    }
    async showAll(req,res){
        // todo
    }
    async showUserPost(req,res){
        const {userId} = req.params;

        const posts = await postModel.findAll({where:{UserId:userId}});

        return res.json(posts);
    }
}

export default new postController;