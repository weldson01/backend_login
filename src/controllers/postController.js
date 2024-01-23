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
        const posts = await postModel.findAll();
        return res.status(200).json(posts);
    }
    async showUserPost(req,res){
        const {userId} = req.params;

        const posts = await postModel.findAll({where:{UserId:userId}});

        return res.json(posts);
    }
    async updateOnePost(req,res){
        const {id} = req.params;
        const {title, body} =req.body;
        const postAux = await postModel.findOne({where:{id:id}});

        if(postAux){
            postAux.set({title,body});
            await postAux.save();
            return res.status(201).json({messsage: "Your post was updated."})
        }else if(!title || !body || !id){
            return res.status(501).json({message: "We need title, body and id for change the post."})
        }else{
            return res.status(500).json({message: "erro"})
        }
    }
}

export default new postController;