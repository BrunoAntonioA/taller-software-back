const router = require('express').Router()
const Proyecto = require('../models/Proyecto')

// Permite guardar un proyecto
router.post('/proyecto', (req, res) => {
    const nombre_proyecto = req.body.nombre_proyecto
    const email_jefe = req.body.email_jefe
    const nombre_jefe_proyecto = req.body.nombre_jefe_proyecto
    const nota_uno = req.body.nota_uno
    const nota_dos = req.body.nota_dos
    const evento = req.body.evento
    const institucion = req.body.institucion
    const postulante = req.body.postulante
    const newProyeto = new Proyecto({
        nombre_proyecto: nombre_proyecto,
        email_jefe: email_jefe,
        nombre_jefe_proyecto: nombre_jefe_proyecto,
        nota_uno: nota_uno,
        nota_dos: nota_dos,
        postulante: postulante,
        etapa: etapa,
        institucion: institucion,
        evento: evento
    })

    console.log('entra al post del back');
    console.log(req.body)
    newProyeto.save((error) => {
        if (error){
            console.log(error);
            return res.status(401).send({ message: 'Error' })
        }
        else{
            return res.status(201).send({ message: 'Done!' })
        }
})

// Permite obtener todos los proyectos
router.get('/proyecto', (req, res) => {
    Proyecto.find((error, proyectos) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(proyectos)
    })
})

// Obtiene un proyecto según su id
router.get('/proyecto/:id', (req, res) => {
    const id = req.params.id
    Proyecto.find({ _id: id }, (error, concursos) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send(concursos)
    })
})

// Elimina un proyecto según su id
router.post('/proyecto/eliminar/:id', (req, res) => {
    const id = req.params.id
    Proyecto.remove({ _id: id }, (error) => {
        if (error) return res.status(404).send({ message: 'Not found' })
        return res.status(201).send({ message: 'Deleted!' })
    })
})

module.exports = router