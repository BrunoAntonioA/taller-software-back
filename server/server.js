const express = require('express')
const app = express()
const mongoose = require('mongoose')

const cors = require('cors');

/* Módulo a exportar */
var server = module.exports = {}


/* Permite agregar modulos adicionales */
server.use = (module) => {
    app.use(module)
}

/* Emplea JSON como notación de objetos */
server.use(express.json())
app.use(cors({ origin: 'http://localhost:4000' }));

server.use(require('./routes/concurso'))
server.use(require('./routes/index'))
server.use(require('./routes/public'))
server.use(require('./routes/register'))
server.use(require('./routes/login'))
server.use(require('./routes/private'))
server.use(require('./routes/proyecto'))



/* Método para iniciar el servidor */
server.start = async (port=3000, dbhost='webmauri.ddns.net', db='taller-sw-db') => {

    /* Obtiene las credenciales de MongoDB y sus parámetros de configuración */
    const mongo = `mongodb://${dbhost}/${db}`
    const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}

    /* Conecta con MongoDB e inicia el servicio HTTP */
    mongoose.connect(mongo, mongoOptions, () => {
        app.listen(port, () => {
            console.log('Server running on http://localhost:' + port)
            console.log('Mongoose connected with MongoDB')
        })
    })

}

/* Inicia el servidor */
server.start()
