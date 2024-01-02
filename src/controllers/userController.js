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
    async updateOne(){
        // TODO atualiza o usuário no banco de dados
    }
    async deleteOne(){
        // TODO deleta o usuário do banco de dados
    }
}

export default new userController();