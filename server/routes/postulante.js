const router = require('express').Router()
const Postulante = require('../models/Postulante')


router.post('/postulante', (req, res) => {
    const { nombre, unidadAcademica, rut, email, nAnexo } = req.body
    const newPostulante = new Postulante({
        nombre: nombre,
        unidadAcademica: unidadAcademica,
        rut: rut,
        email: email,
        nAnexo: nAnexo
    })
    newPostulante.save((error) => {
        if (error) return res.status(401).send({ message: 'Error' })
        return res.status(201).send({ message: 'Done!' })
    })
})

router.get('/postulante', (req, res) => {
    Postulante.find((error, postulantes) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(postulantes)
    })
})

router.get('/postulante/:id', (req, res) => {
    const id = req.params.id
    Postulante.find({ _id: id }, (error, postulantes) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(postulantes)
    })
})

router.post('/postulante/eliminar/:id', (req, res) => {
    const id = req.params.id
    Postulante.remove({_id: id}, (error, postulantes) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send({ message: 'Deleted!' })
    })
})


module.exports = router