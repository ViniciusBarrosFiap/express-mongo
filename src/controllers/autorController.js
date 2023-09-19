import {autor} from "../model/Autor.js"

class autorController {
    //Controller para listar todos os autores
    static async listarAutores(req, res){
        try{
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao listar os livros!` })
        }
    };
    //Controller para buscar o autor por id
    static async listarAutoresPorId(req, res){
        try{
            const idAutor = req.params.id;
            const autorEncontrado = await autor.findById(idAutor);
            res.status(200).json(autorEncontrado)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - Falha ao econtrar autor!` })
        }
    }
    //Controller para atualizar o autor
    static async atualizaAutor(req, res){
        try{
            const idAutor = req.params.id;
            await autor.findByIdAndUpdate(idAutor, req.body);
            res.status(200).json({ message:`Autor atualizado com sucesso` })
        }catch{

        }
    }
    //Controller para criar o autor
    static async criaAutor(req, res){
        try{
            const novoAutor = await livro.create(req.body)
            res.status(201).json({ message:"Autor criado com sucesso", autor: novoAutor })
        }catch(erro){
            res.status(500).json({ message:`${erro.message} - Falha ao criar autor` })
        }
    }
    //Controller para deletar o autor
    static async deletaAutor(req, res){
        try{
            const idAutor = req.params.id
            await autor.findByIdAndDelete(idAutor)
            res.status(200).json({ message:`Autor deletado com sucesso` })
        }catch(erro){
            res.status(500).json({ message:`${erro.message} - Falha ao deletar autor` })
        }
    }

}
export default autorController;