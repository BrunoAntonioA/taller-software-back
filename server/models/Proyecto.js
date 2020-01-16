

const mongoose = require('mongoose')


const ProyectSchema = new mongoose.Schema({
    
    /*Nombre del proyecto */
    nombre:{
        type: String,
        required: true,
        trim: true,
        unique: false,
    },

    concurso_id:{
        type: String,
        required: false,
        trim: true,
        unique: false,
    },


    /* Correo electrónico del jefe de proyecto */
    email: {
        type: String, 
        required: false, 
        trim: true, 
        unique: false, 
    },

    /*Nombre del proyecto */
    nombreJefe:{
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    
    /*Nota de la primera evaulación del proyecto */
    nota1:{
        type: Number,
        required: false,
        trim: true,
        unique: false,
    },

    /*Nota de la segunda evaulación del proyecto */
    nota2:{
        type: Number,
        required: false,
        trim: true,
        unique: false,
    },

    /*Institución a la que pertenece el proyecto */
    unidadAcademica:{
        type: String,
        required: false,
        trim: true,
        unique: false,
    },

    etapa:{
        type: Number,
        required: false,
        trim: true,
    },

    postulante: {
        type: [String],
        trim: true,
    },

    evento: {
        type: [String],
        trim: true,
    }
    
})

/* Módulo a exportar */
module.exports = mongoose.model('Proyecto', ProyectSchema)