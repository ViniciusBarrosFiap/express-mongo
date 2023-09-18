import mongoose from "mongoose";

async function conetaNaDatabase(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.c3ubokj.mongodb.net/livraria?retryWrites=true&w=majority")

    return mongoose.connection;
} 

export default conetaNaDatabase;