const router = require('express').Router()

router.post('/concurso', (req, res) => {
    res.send(
        print(req.body.data)
    )
})

module.exports = router