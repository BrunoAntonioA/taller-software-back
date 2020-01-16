const router = require('express').Router()
const Concurso = require('../models/Concurso')


router.post('/concurso', (req, res) => {
    const nombre = req.body.nombre
    const fecha_inicio = req.body.fecha_inicio
    const fecha_termino = req.body.fecha_termino
    const newConcurso = new Concurso({
        nombre: nombre,
        fecha_inicio: fecha_inicio,
        fecha_termino: fecha_termino
    })
    newConcurso.save((error) => {
        if (error) return res.status(401).send({ message: 'Already registered' })
        return res.status(201).send({ message: 'Done!' })
    })
}) 

router.get('/concurso', (req, res) => {
    Concurso.find((error, concursos) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(concursos)
    })
})

router.get('/concurso/:id', (req, res) => {
    const id = req.params.id
    Concurso.find({ _id: id }, (error, concursos) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(concursos)
    })
})

router.post('/concurso/eliminar/:id', (req, res) => {
    const id = req.params.id
    Concurso.remove({_id: id}, (error, concursos) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send({ message: 'Deleted!' })
    })
})


module.exports = router