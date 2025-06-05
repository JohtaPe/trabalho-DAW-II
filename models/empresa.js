import conexao from "../config/conexao.js"

const Empresa = conexao.Schema({
        nome: {type:String, required:true},
        pais: {type:String, required:true},
        logo: {type:String, required:false}
    })

export default conexao.model('Empresa',Empresa)