import express from 'express';
import multer from 'multer'; 
var storage = multer.diskStorage({
    filename: function(req, file, cb){
    let nome = Date.now() + "-" + file.originalname
    cb(null, nome)
    },
    destination: function(req, file, cb){
    let path = "./public/fotos"
    cb(null, path)
    }
    })
    var upload = multer({ storage })
const router = express.Router();
import {
    home,

    /*GENERO*/

    abreedtgenero,
    edtgenero,
    abreaddgenero,
    deletagenero,
    addgenero,
    listargenero,
    filtrargenero,

    /*EMPRESA*/

    abreedtempresa,
    edtempresa,
    abreaddempresa,
    deletaempresa,
    addempresa,
    listarempresa,
    filtrarempresa,

    /*JOGO*/

    abreedtjogo,
    edtjogo,
    abreaddjogo,
    deletajogo,
    addjogo,
    listarjogo,
    filtrarjogo
    
} from '../controllers/controller.js'
router.get('/', home)

/*GENERO*/

router.get('/admin/genero/add', abreaddgenero)
router.post('/admin/genero/add', addgenero)
router.get('/admin/genero/lst', listargenero)
router.post('/admin/genero/lst', filtrargenero)
router.get('/admin/genero/del/:id', deletagenero)
router.get('/admin/genero/edt/:id', abreedtgenero)
router.post('/admin/genero/edt/:id', edtgenero)

/*EMPRESA*/

router.get('/admin/empresa/add', abreaddempresa)
router.post('/admin/empresa/add', upload.single('logo'), addempresa)
router.get('/admin/empresa/lst', listarempresa)
router.post('/admin/empresa/lst', filtrarempresa)
router.get('/admin/empresa/del/:id', deletaempresa)
router.get('/admin/empresa/edt/:id', abreedtempresa)
router.post('/admin/empresa/edt/:id', upload.single('logo'), edtempresa)

/*JOGO*/

router.get('/admin/jogo/add', abreaddjogo)
router.post('/admin/jogo/add', upload.single('foto'), addjogo)
router.get('/admin/jogo/lst', listarjogo)
router.post('/admin/jogo/lst', filtrarjogo)
router.get('/admin/jogo/del/:id', deletajogo)
router.get('/admin/jogo/edt/:id', abreedtjogo)
router.post('/admin/jogo/edt/:id', upload.single('foto'), edtjogo)
export default router