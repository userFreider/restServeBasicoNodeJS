const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        //crear rutas constantes
        this.usuariosPath = '/api/usuarios';

        //llamar nuestro metodo middleware
        this.middlewares();
        //llamar mis metodo rutas
        this.routes();
    }



    middlewares() {
        //CORS
        this.app.use(cors())

        //lectura y parseo del body json post, delete, put, path
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'));
    }


    //metodo de todas mis rutas
    routes() {

        //mandar a llamar mis rutas path validad para llamar en una API(/app/users)
        this.app.use(this.usuariosPath, require('../routes/usuarios'))

    }


    //metodo listen
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`servidor corriendo en el puerto ${this.PORT}`)
        });
    }
}





module.exports = Server;