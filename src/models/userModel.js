import { INTEGER, STRING } from "sequelize";
import db from "../database/dbConnect";

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
    password:{
        type: STRING,
        allowNull: false
    }
})

export default userModel;
