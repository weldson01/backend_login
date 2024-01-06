import "dotenv/config"
import jwt from "jsonwebtoken"


const authorizationAdmin =  (req,res, next)=>{
    const token = req.headers["authorization"];

    if(!token){
        return res.status(500).json({message: "No token was provided"})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, result)=>{
        if(err){
            return res.status(500).json({message: "There is some error."})
        }
        
        const {id, userType} = result;

        req.userType = userType;
        req.userId = id;

        if(userType != "admin"){
            return res.json({messsage: "The user cannot delete another user"});
        }

        next()
    })

}

export default authorizationAdmin;