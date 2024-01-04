import userModel from "../models/userModel";
import { hashSync } from "bcrypt";

class userController{
    async show(req,res){
        const users = await userModel.findAll();
        return res.json(users);
    }
    async findOne(req,res){
        const {email} = req.params;
        console.log(email);
        try{
        const userFinded = await userModel.findOne({email});
        return res.status(200).json(userFinded);
        }catch(err){
            return res.status(500).json(err);
        }
    
    }
    async createOne(req, res){
        const {name, email, password} = req.body;

        const passwordEcrypted = await hashSync(password, 12);
        const userTest = await userModel.findOne({
            where:{
                email:email
            }
        });
        if(!userTest){
            const result = await userModel.create({name,email,password:passwordEcrypted});
            return res.json(result);
        }else{
            return res.status(500).json({message: "The email is used already"});
        }

        
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