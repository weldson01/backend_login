import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "login_system",
})

export default sequelize;