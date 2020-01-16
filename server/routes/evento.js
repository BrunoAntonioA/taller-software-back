const router = require('express').Router()
const Evento = require('../models/Evento')

// Permite guardar un evento
router.post('/evento', (req, res) => {
    const nombre = req.body.nombre
    const fecha = req.body.fecha
    const descripcion = req.body.descripcion
    const newEvento = new Evento({
        nombre: nombre,
        fecha: fecha,
        descripcion: descripcion,
    })
    newEvento.save((error) => {
        if (error) return res.status(401).send({ message: 'Already registered' })
        return res.status(201).send({ message: 'Done!' })
    })
})

// Permite obtener todos los evento
router.get('/evento', (req, res) => {
    Evento.find((error, eventos) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(eventos)
    })
})

// Obtiene un evento según su id
router.get('/evento/:id', (req, res) => {
    const id = req.params.id
    Evento.find({ _id: id }, (error, eventos) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(eventos)
    })
})

// Elimina un evento según su id
router.post('/evento/eliminar/:id', (req, res) => {
    const id = req.params.id
    Evento.remove({ _id: id }, (error) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send({ message: 'Deleted!' })
    })
})


router.post('/evento/actualizar/', (req, res) => {
    Evento.updateOne({ _id: req.body._id }, { $set: req.body }, (error) => {
        if (error) return res.status(404).send({ message: 'Error' })
        return res.status(201).send({ message: "Done!" })
    })
})

module.exports = router