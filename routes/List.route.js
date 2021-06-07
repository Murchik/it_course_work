const { Router } = require('express')
const Character = require('../models/Character')
const router = Router()

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find()
        res.json(characters)
    } catch (e) {
        res.status(500).json({ message: `[Server Error]: ${e.message}` })
    }
})

router.get('/:filter', async (req, res) => {
    try {
        console.log('> [Filtering] by: ', req.params.filter)
        const characters = await Character.find({ characterClass: req.params.filter })
        console.log('> [Filtering] found: ', characters)
        res.json(characters)
    } catch (e) {
        res.status(500).json({ message: `[Server Error]: ${e.message}` })
    }
})

router.delete('/', async (req, res) => {
    try {
        console.log("req.body: ", req.body)
        const { characterId } = req.body
        const result = await Character.findByIdAndDelete(characterId)
        res.json(result)
    } catch (e) {
        res.status(500).json({ message: `[Server Error]: ${e.message}` })
    }
})

module.exports = router
