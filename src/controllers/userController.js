import userModel from "../models/userModel";

class userController{
    async show(req,res){
        const users = await userModel.findAll();
        return res.json(users);
    }
    async findOne(){
        // TODO procura por apenas um usuário
    }
    async createOne(req, res){
        const {name, email, password} = req.body;

        const result = await userModel.create({name,email,password});
        // TODO corrigir bug quando coloca o mesmo email 
        return res.json(result);
    }
    async updateOne(req,res){
        const {name, email, password} = req.body;
        const userAux =  await userModel.findOne({email});

        try{
            const result = await userAux.update({name,email,password});
            return res.status(200).json(result);

        }catch(err){
            return res.json(err);
        }

    }
    async deleteOne(req,res){
        const {id} = req.body;
        console.log(id)
        try {
            await userModel.destroy({
                where:{
                    id:id
                }
            });
            return res.json({message: "The user was deleted."});
        }catch(err){
            return res.json(err);
        }
    }
}

export default new userController();