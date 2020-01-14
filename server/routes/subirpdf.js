const router = require('express').Router()
const Archivo = require('../models/Archivo')

router.post('/subirpdf', function (req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send({ message: 'No files provided' });
    }
    const sample = req.files.sample
    const name = sample.name
    const ruta = `./files/${name}`
    sample.mv(ruta, function (err) {
        if (err)
            return res.status(500).send(err);
        const newArchivo = new Archivo({ nombre: name, ruta: ruta });
        newArchivo.save((error) => {
            if (error) return res.status(401).send({ message: 'Error' })
            return res.status(201).send({ message: 'Done!' })
        })
    });
});

module.exports = router