const mongoose = require('mongoose')

const ConcursoSchema = new mongoose.Schema({
    
    name: {
        type: String, 
        required: true, 
        trim: true, 
        unique: true, 
    },
    start_date: {
        type: Date,
        trim: true,
        required: true,
    },
    end_date: {
        type: Date,
        trim: true,
        required: true,
    }
    
})

/* Módulo a exportar */
module.exports = mongoose.model('Concurso', ConcursoSchema)