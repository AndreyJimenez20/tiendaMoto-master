import mongoose from "mongoose";


const conectarMongo = async (): Promise<void> =>{

    try {
        await mongoose.connect(process.env.URL_MONGODB || "");
        console.log("MongoDB conectado con exito!");
    } catch (error) {
        console.error("error: ", error);
        process.exit(1);
    }
};

export default conectarMongo;
