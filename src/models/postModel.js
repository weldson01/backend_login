import { INTEGER, STRING } from "sequelize";
import db from "../database/dbConnect";

const postModel = db.define("post", {
    id:{
        type: INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type: STRING,
        allowNull: false,
    },
    body:{
        type: STRING,
        allowNull: false
    }
})

export default postModel;