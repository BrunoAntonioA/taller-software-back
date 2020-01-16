const mongoose = require('mongoose')

const ArchivoSchema = new mongoose.Schema({
    
    nombre: {
        type: String, 
        required: true, 
        trim: true, 
        unique: true, 
    },
    ruta: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    id_proyecto: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
})

/* Módulo a exportar */
module.exports = mongoose.model('Archivo', ArchivoSchema)