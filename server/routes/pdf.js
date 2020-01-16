const router = require('express').Router()
const Archivo = require('../models/Archivo')

router.post('/pdf', function (req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send({ message: 'No files provided' });
    }
    const sample = req.files.sample
    const name = sample.name
    const ruta = `./files/${name}`
    const id_proyecto = req.body.id_proyecto
    sample.mv(ruta, function (err) {
        if (err)
            return res.status(500).send(err);
        const newArchivo = new Archivo({ nombre: name, ruta: ruta, id_proyecto: id_proyecto });
        newArchivo.save((error) => {
            if (error) return res.status(401).send({ message: 'Error' })
            return res.status(201).send({ message: 'Done!' })
        })
    });
});

router.get('/pdf/:id', function (req, res) {
    const id = req.params.id
    Archivo.findOne({_id: id}, (error, archivo) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.sendFile(archivo.ruta, { root : __dirname + '/../../'})
    })
});

module.exports = router