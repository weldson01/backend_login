import jwt from "jsonwebtoken";
import "dotenv/config";


export default function authorization(req,res, next){
    const token = req.headers['authorization'];
    console.log(token)

    if(!token){
        return res.status(401).json({message: "No token was provided"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, userId)=>{
        if(err){
            return res.json(err);
        }
        req.id = userId;
        next();
    })
}