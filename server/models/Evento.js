const mongoose = require('mongoose')

const EventoSchema = new mongoose.Schema({
    
    nombre: {
        type: String, 
        required: true, 
        trim: true, 
        unique: false, 
    },
    fecha: {
        type: Date,
        trim: true,
        required: false,
    },
    descripcion: {
        type: String,
        trim: true,
        required: false,
    }
    
})

/* Módulo a exportar */
module.exports = mongoose.model('Evento', EventoSchema)