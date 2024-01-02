import app from "./App.js"
import sequelize from "./database/dbConnect.js"


app.server.listen("3000", ()=>{
    console.log("Server is ok")
})
sequelize.sync(()=>console.log("DB is on!"));