const { Router } = require('express')
const router = Router()

router.post('/test', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: '[Error]: Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router
