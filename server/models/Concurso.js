const mongoose = require('mongoose')

const ConcursoSchema = new mongoose.Schema({
    
    nombre: {
        type: String, 
        required: true, 
        trim: true, 
        unique: true, 
    },
    fecha_inicio: {
        type: Date,
        trim: true,
        required: true,
    },
    fecha_termino: {
        type: Date,
        trim: true,
        required: true,
    },

    ids_proyectos: {
        type: [String],
        trim: true,
    }
    
})

/* Módulo a exportar */
module.exports = mongoose.model('Concurso', ConcursoSchema)