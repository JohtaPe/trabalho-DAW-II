
import Genero from '../models/genero.js';
import Empresa from '../models/empresa.js';
import Jogo from '../models/jogo.js';

export async function home(req,res){
    res.render('admin/index')
}

/*GENERO*/

export async function abreaddgenero(req, res) {
    res.render('admin/genero/add')
}
export async function addgenero(req, res) {
    await Genero.create({
        nome:req.body.nome,
    })
    res.redirect('/admin/genero/add')
}
export async function listargenero(req, res) {

    const resultado = await Genero.find({}).catch(function(err){console.log(err)})
    res.render('admin/genero/lst',{Generos:resultado});
}
export async function filtrargenero(req, res) {
    res.render('admin/genero/lst', '');
}
export async function deletagenero(req, res) {
    await Genero.findByIdAndDelete(req.params.id)
   res.redirect('/admin/genero/lst')
}
export async function abreedtgenero(req, res){
    const resultado = await Genero.findById(req.params.id)
    res.render('admin/genero/edt',{Genero: resultado})
}
export async function edtgenero(req, res){
    await Genero.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/genero/lst')
}

/*EMPRESA*/

export async function abreaddempresa(req, res) {
    res.render('admin/empresa/add')
}
export async function addempresa(req, res) {
    console.log(req.file)
    var logoupload;
    if(req.file!=null)
    {
        logoupload = req.file.filename
    }
    else{
        logoupload=null
    }
    await Empresa.create({
        nome:req.body.nome,
        pais:req.body.pais,
        logo:logoupload
    })
    res.redirect('/admin/empresa/add')
}
export async function listarempresa(req, res) {
    
    const resultado = await Empresa.find({}).catch(function(err){console.log(err)})
    res.render('admin/empresa/lst',{Empresas:resultado});
}
export async function filtrarempresa(req, res) {
    res.render('admin/empresa/lst', '');
}
export async function deletaempresa(req, res) {
    await Empresa.findByIdAndDelete(req.params.id)
   res.redirect('/admin/empresa/lst')
}
export async function abreedtempresa(req, res){
    const resultado = await Empresa.findById(req.params.id)
    res.render('admin/empresa/edt',{Empresa: resultado})
}
export async function edtempresa(req, res){
    var logoupload;
    if(req.file!=null)
    {
        logoupload = req.file.filename
    }
    else{
        logoupload=null
    }
    await Empresa.findByIdAndUpdate(req.params.id, 
        {nome:req.body.nome,
         pais:req.body.pais,
         logo:logoupload
        }
    )
    res.redirect('/admin/empresa/lst')
}

/*JOGO*/

export async function abreaddjogo(req, res) {
    const empresas = await Empresa.find({}).catch(function(err){console.log(err)})
    const generos = await Genero.find({}).catch(function(err){console.log(err)})
    res.render('admin/jogo/add', {Empresas: empresas, Generos: generos})
}
export async function addjogo(req, res) {
    var Aempresa=null, Ogenero=null

    if(req.body.empresa!=null)
    {
        Aempresa = await Empresa.findById(req.body.empresa)
    }
    if(req.body.genero!=null)
        {
            Ogenero = await Genero.findById(req.body.genero)
        }

        var fotoupload;
        if(req.file!=null)
        {
            fotoupload = req.file.filename
        }
        else{
            fotoupload=null
        }
    await Jogo.create({
        nome:req.body.nome,
        foto:fotoupload,
        video:req.body.video,
        idade:req.body.idade,
        empresa:Aempresa,
        genero:Ogenero
    })
    res.redirect('/admin/jogo/add')
}
export async function listarjogo(req, res) {

    const resultado = await Jogo.find({}).populate('empresa genero').catch(function(err){console.log(err)})
    res.render('admin/jogo/lst',{Jogos:resultado});
}
export async function filtrarjogo(req, res) {
    res.render('admin/jogo/lst', '');
}
export async function deletajogo(req, res) {
    await Jogo.findByIdAndDelete(req.params.id)
   res.redirect('/admin/jogo/lst')
}
export async function abreedtjogo(req, res){
    const empresas = await Empresa.find({}).catch(function(err){console.log(err)})
    const generos = await Genero.find({}).catch(function(err){console.log(err)})
    const resultado = await Jogo.findById(req.params.id)
    res.render('admin/jogo/edt', {Empresas: empresas, Generos: generos, Jogo: resultado})
}
export async function edtjogo(req, res){
    var Aempresa=null, Ogenero=null
    
    if(req.body.empresa!=null)
    {
        Aempresa = await Empresa.findById(req.body.empresa)
    }
    if(req.body.genero!=null)
        {
            Ogenero = await Genero.findById(req.body.genero)
        }
    var fotoupload;
    if(req.file!=null)
    {
        fotoupload = req.file.filename
    }
    else{
        fotoupload=null
    }
  
    await Jogo.findByIdAndUpdate(req.params.id, {
        nome:req.body.nome,
        foto:fotoupload,
        video:req.body.video,
        idade:req.body.idade,
        empresa:Aempresa,
        genero:Ogenero
    })
    res.redirect('/admin/jogo/lst')
}