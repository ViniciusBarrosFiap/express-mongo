import express from 'express'
import conetaNaDatabase from './config/dbConnect.js';

const conexao = await conetaNaDatabase();

conexao.on("error", (erro)=>{
    console.error("Erro de conexão", erro)
});

conexao.once("open", ()=>{
    console.log('Conectado ao banco');
})

const app = express()
app.use(express.json()) //Middleware
//Array de objetos no formato JSON, podemos localizar os objetos pelo indice
const livros = [
    {
        id:1,
        titulo:"O senhor dos aneis"
    },
    {
        id:2,
        titulo:'A guerra das galáxias'
    }
]
//Função busca o index do objeto dentro do array livros, 
//se o id do livro for igual ao id passado retorna o indice do objeto
function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}
//CRIANDO AS ROTAS COM MÉTODOS DO EXPRESS(GET, POST, PATCH/PUT, DELETE)
//url base da API "/"
app.get("/", (req, res)=>{
    //Método .send() para envio de dados
    res.status(200).send("Curso de Node.js")
})

//Rota com método get para o /livros 
app.get("/livros", (req, res)=>{
    //colocar método do envio(.json(ref))
    res.status(200).json(livros)
})
//Rota que busca apenas um livro especifico
app.get("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
})

//Rota com método post para publicar algo novo no /livros
app.post("/livros", (req, res)=>{
    //Adicionando objetos trazidos do body da requisição no array livros com o .push()   
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});
//Rota com método put para editar o titulo armazenado dentro do objeto armazenado no array livros
app.put("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})
//Rota com método delete para excluir objeto de dentro do array livros com base no indice
app.delete("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluido com sucesso!");
}) 

export default app;

