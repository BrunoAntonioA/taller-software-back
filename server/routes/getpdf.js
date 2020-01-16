const router = require('express').Router()
const Archivo = require('../models/Archivo')

router.get('/getpdf/:id', function (req, res) {
    const id = req.params.id
    Archivo.find({_id: id}, (error, archivo) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).sendFile(archivo.ruta)
    })
});

module.exports = router