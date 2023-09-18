import mongoose from "mongoose";

async function conetaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
} 

export default conetaNaDatabase;