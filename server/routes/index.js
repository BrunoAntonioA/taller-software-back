const router = require('express').Router()

router.get('/', (req, res) => res.send('Bienvenido al BACK-END para el Taller de Software\n'))

module.exports = router