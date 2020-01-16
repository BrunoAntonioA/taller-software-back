const mongoose = require('mongoose')

/* 
 * Esquema base para almacenar
 * la información de los usuarios
 * dentro de MongoDB. Las contraseñas
 * se almacenen mediante el hash
 * correspondiente.
 * 
 * Más info en  /server/routes/register
 *              /server/routes/login
 * 
 * Autores: Felipe Céspedes Cordero
 * 
 */

const ProyectSchema = new mongoose.Schema({

    /*Nombre del proyecto */
    nombre_proyecto: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },


    /* Correo electrónico del jefe de proyecto */
    email_jefe: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },

    /*Nombre del proyecto */
    nombre_jefe_proyecto: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },

    /*Nota de la primera evaulación del proyecto */
    nota_uno: {
        type: Number,
        required: false,
        trim: true,
        unique: false,
    },

    /*Nota de la segunda evaulación del proyecto */
    nota_dos: {
        type: Number,
        required: false,
        trim: true,
        unique: false,
    },

    /*Institución a la que pertenece el proyecto */
    institucion: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },

    etapa: {
        type: Number,
        required: true,
        trim: true,
    },

    postulante: {
        type: [String],
    }

})

/* Módulo a exportar */
module.exports = mongoose.model('Proyecto', ProyectSchema)