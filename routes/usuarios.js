
const { Router } = require('express'); //Router permite crear funcion de mi router
const { usuariosGet,usuariosPost,usuariosPut,usuariosDelete } = require('../controllers/usuarios')

const router = Router();

router.get('/', usuariosGet);//mando la referencia no la ejecuto
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);


module.exports = router;