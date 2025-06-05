import conexao from "../config/conexao.js"

const Jogo = conexao.Schema(
    {
        nome: {type:String, required:true},
        foto: {type: String, required: false},
        video: {type: String, required: false},
        idade: {type: String, required: false},

        empresa: {type: conexao.Types.ObjectId, ref: "Empresa", required: false},
        genero: {type: conexao.Types.ObjectId, ref: "Genero", required: false}
    
    })

    export default conexao.model('Jogo',Jogo)