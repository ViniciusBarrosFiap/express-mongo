import express from 'express'
import conetaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
const conexao = await conetaNaDatabase();

conexao.on("error", (erro)=>{
    console.error("Erro de conexão", erro)
});

conexao.once("open", ()=>{
    console.log('Conectado ao banco');
})

const app = express()
routes(app)

export default app;

