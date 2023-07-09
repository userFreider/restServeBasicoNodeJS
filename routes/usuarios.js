//destructurar
const { Router } = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

//id parametros para obtner o agregar un nuevo id
router.put('/:id', usuariosPut);


router.post('/', usuariosPost);

router.delete('/', usuariosDelete);




router.patch('/', (req, res) => {

    res.json({
        messages: 'patch  Api'
    })
});



//esportar modulos
module.exports = router;