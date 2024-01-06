import { INTEGER, STRING } from "sequelize";
import db from "../database/dbConnect";
import postModel from "./postModel";

const userModel = db.define("User",{
    id:{
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: STRING,
        allowNull: false
    },
    email:{
        type: STRING,
        allowNull: false,
        unique: true
    },
    typeAccount:{
        type: STRING,
    },
    password:{
        type: STRING,
        allowNull: false
    }
})

userModel.hasMany(postModel);
postModel.belongsTo(userModel);

export default userModel;
