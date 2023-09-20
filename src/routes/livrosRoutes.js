import express from "express";
import LivroController from "../controllers/livroController.js";

//Escrevendo a url de direcionamento, as rotas
const routes = express.Router();
//Lista todos os livros
routes.get("/livros", LivroController.listarLivros);
//Busca livros por editora
routes.get("/livros/busca", LivroController.buscaLivroPorEditora)
//Busca um livro unico
routes.get("/livros/:id", LivroController.listarLivroPorId)
//Cria um novo livro
routes.post("/livros", LivroController.cadastrarLivro)
//Atualiza um livro
routes.put("/livros/:id", LivroController.atualizarLivro)
//Deleta um livro
routes.delete("/livros/:id", LivroController.excluirLivro)



export default routes