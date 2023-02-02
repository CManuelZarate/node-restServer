const express = require('express');
const cors = require('cors');

class Server{
  constructor() { //definimos las propiedades
    this.app =express();//cada vez q se lance una instancia de mi servidor creo la app de expres
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Middlewares : funciones q añaden funcionalidad a mi webserver
    this.middlewares();
    //Rutas de mi app
    this.routes();//llamo mis rutas
  }

  middlewares(){//cada midelware los puedo colocar aca o en las rutas

    //CORS
    this.app.use( cors() );

    //Parseo y lectura del body
    this.app.use( express.json() );//cualquie info que venga la intentara serializar a json

    //el primer midelware es el relacionado a la carpeta publica
    //directorio publico
    this.app.use( express.static('public') );//use palabra clave para decir q es un midelware
  }

  routes(){
    //lo q necesito cargar es
    this.app.use( this.usuariosPath, require('../routes/usuarios') );//puedo aplicar otro mdelware al cual pasar una solicitud por esta ruta aca lo voy a cargar"como si fuera un midelware condicional"
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log("server corriendo en prto", this.port);
    });
  }

}

module.exports = Server;