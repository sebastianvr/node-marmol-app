const express = require('express');
const cors = require('cors');

const { dbConection } = require('../database/config');



class Server {

    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = '/api/';

        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    async dbConnection() {
        await dbConection();
    }

    routes() {
        this.app.use(this.path, require('../routes/usuario.routes'));
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Ejecutando en el puerto ', this.port);
        });
    }

}

module.exports = Server;