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
    async deleteOne(){
        // TODO deleta o usuário do banco de dados
    }
}

export default new userController();