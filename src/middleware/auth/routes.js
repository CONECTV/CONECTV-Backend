const router = require('express').Router();

router.post('/signUp', async (req, res) => {

    res.json({
        error: null,
        data: 'aquí va ir la data'
    })
})

module.exports = router;