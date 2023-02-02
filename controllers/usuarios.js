const { response, request }  = require('express')


const usuariosGet = (req = request, res = response) => {

  const {q,nombre, apikey ='nokey'} = req.query;
  res.json({
    msg:'get API - controlador',
    q,
    nombre,
    apikey
  })
}

const usuariosPost = (req, res) => {

  const {nombre,edad} = req.body;

  res.json({
    msg:'post API -control',
    nombre,
    edad
  })
};

const usuariosPut = (req, res =response) => {

  const {id} = req.params;
  res.json({
    msg:'put API -controler',
    id
  })
};
const usuariosDelete = (req, res) => {
  res.json({
    msg:'delete API'
  })
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
}