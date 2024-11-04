import mongoose from "mongoose";

const dbConnect = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
        console.log(connectionInstance);
        console.log("DB Connectd successfully");
    } catch (error) {
        console.log("DB Connection Error :- ",error);
    }
}

export default dbConnect