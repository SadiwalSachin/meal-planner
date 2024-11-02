import { app } from "./app.js";
import dbConnect from "./db/index.js";
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000

dbConnect()
.then(()=>{
    console.log("DB Connected Successfully At Index File");
    app.listen(PORT,()=>{
        console.log(`Server is listening from ${PORT}`)
    })

    app.on("error",()=>{
        console.log("error");
    })
})
.catch((error)=>{
    console.log(error)
    process.exit(1)
})

