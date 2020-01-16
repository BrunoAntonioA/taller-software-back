const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');

const cors = require('cors');

/* Módulo a exportar */
var server = module.exports = {}


/* Permite agregar modulos adicionales */
server.use = (module) => {
    app.use(module)
}

/* Emplea JSON como notación de objetos */
server.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }));
server.use(fileUpload())

server.use(require('./routes/concurso'))
server.use(require('./routes/index'))
server.use(require('./routes/pdf'))
server.use(require('./routes/public'))
server.use(require('./routes/register'))
server.use(require('./routes/login'))
server.use(require('./routes/private'))
server.use(require('./routes/proyecto'))
server.use(require('./routes/evento'))
server.use(require('./routes/postulante'))


/* Método para iniciar el servidor */
server.start = async (port=3000, dbhost='190.101.185.129', db='taller-sw-db') => {

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
