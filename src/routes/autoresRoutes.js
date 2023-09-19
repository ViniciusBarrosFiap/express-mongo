import express from "express"
import autorController from "../controllers/autorController.js"

const routes = express.Router()

//Rota lista todos os autores
routes.get("/autores", autorController.listarAutores);

//Rota para buscar um autor especifico
routes.get("/autores/:id", autorController.listarAutoresPorId)

export default routes