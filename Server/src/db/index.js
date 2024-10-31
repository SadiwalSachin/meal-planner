import mongoose from "mongoose";

const dbConnect = async ()=>{
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017")
        console.log(connectionInstance);
        console.log("DB Connectd successfully");
    } catch (error) {
        console.log("DB Connection Error :- ",error);
    }
}

export default dbConnect