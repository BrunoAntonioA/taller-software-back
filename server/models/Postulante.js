const mongoose = require('mongoose')

const PostulanteSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    unidadAcademica: {
        type: String,
        rut: String,
        email: String,
        nAnexo: Number,
        trim: true,
        required: true,
    },
    rut: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    nAnexo: {
        type: Number,
        trim: true,
        required: true,
    }

})

/* Módulo a exportar */
module.exports = mongoose.model('Postulante', PostulanteSchema)