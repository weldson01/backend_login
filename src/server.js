import app from "./App.js"
import db from "./database/dbConnect.js"


app.server.listen("3000", ()=>{
    console.log("Server is ok")
})
db.sync(()=>console.log("DB is on!"));