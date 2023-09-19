import livro from "../model/Livro.js"


//FAZENDO AS FUNÇÕES DO CRUD DA API

//Classe controlodora das funções executadas nas rotas
//Funciona como um objeto, exemplo: LivroController.listarLivros
class LivroController {
    //Controlador da url base
    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({})//Método para pegar todos os dados
            res.status(200).json(listaLivros)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição` })
        }
    }
    //Controlador responsavel pelo cadastro
    static async cadastrarLivro (req, res){
        try{
            const novoLivro = await livro.create(req.body)//Método para criar um dado
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
        }
        catch(erro){
            res.status(500).json({ message:`${erro.message} - Falha ao cadastrar o livro!` })
        }
    }
    //Controlador responsavel por buscar um item especifico
    static async listarLivroPorId(req, res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)//Método para encontrar um item
            res.status(200).json(livroEncontrado)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro` })
        }
    }
    //Controlador responsavel por atualizar um item
    static async atualizarLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body);//Método para achar e atualizar
            res.status(200).json({ message:"Livro atualizado!" })
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro` })
        }
    }
    //Controlador responsavel por exluir um item
    static async excluirLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id);//Método para achar e excluir
            res.status(200).json({ message:"Livro excluido!" })
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - Falha na exclusão do livro` })
        }
    }

}

export default LivroController