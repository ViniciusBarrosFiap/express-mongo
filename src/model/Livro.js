import mongoose from "mongoose";
//Definindo o schema para o mongoDB
//Passar as propriedades que o livro deve ter(titulo, autor, paginas, etc)
const livroSchema = new mongoose.Schema({
    id:{ type: mongoose.Schema.Types.ObjectId },
    titulo: {type : String, required: true},
    editora: {type : String},
    preco: {type : Number},
    paginas: {type:Number}
}, {versionKey:false})

const livro = mongoose.model("livros", livroSchema);

export default livro