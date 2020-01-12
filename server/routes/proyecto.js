const router = require('express').Router()
const Proyecto = require('../models/Proyecto')

router.post('/proyecto', (req, res) => {
    const nombre_proyecto = req.body.nombre_proyecto
    const email_jefe = req.body.email_jefe
    const nombre_jefe_proyecto = req.body.nombre_jefe_proyecto
    const nota_uno = req.body.nota_uno
    const nota_dos = req.body.nota_dos
    const newProyeto = new Proyecto({ 
        nombre_proyecto: nombre_proyecto, 
        email_jefe: email_jefe, 
        nombre_jefe_proyecto: nombre_jefe_proyecto,
        nota_uno: nota_uno, 
        nota_dos: nota_dos
    })
    newProyeto.save((error) => {
        if(error) return res.status(401).send({message: 'Already registered'})
        return res.status(201).send({message: 'Done!'})
    })
})

router.get('/proyecto', (req, res) => {
      Proyecto.find((error, proyectos) => {
        if(error) return res.status(401).send({message: 'Already registered'})
        return res.status(201).send(proyectos)
    })
})

module.exports = router