const router = require('express').Router()
const Concurso = require('../models/Concurso')


router.post('/concurso', (req, res) => {
        const name = req.body.name
        const start_date = req.body.start_date
        const end_date = req.body.end_date
        const newConcurso = new Concurso({ 
            name: name, 
            start_date: start_date, 
            end_date: end_date
        })
        newConcurso.save((error) => {
            if(error) return res.status(401).send({message: 'Already registered'})
            return res.status(201).send({message: 'Done!'})
        })
})

router.get('/concurso', (req, res) => {
    Concurso.find((error, concursos) => {
        if(error) return res.status(404).send({message: 'Not found'})
        return res.status(201).send(concursos)
    })
})

module.exports = router