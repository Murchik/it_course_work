const { Router } = require('express')
const Character = require('../models/Character')
const router = Router()

// /add route
router.post('/', async (req, res) => {
    try {
        console.log('> [Server recived /add request] Body: ', req.body)

        const {
            characterName,
            characterClass,
            characterEliteLevel,
            characterLevel
        } = req.body

        const candidate = await Character.findOne({ characterName })

        if (candidate) {
            return res.status(400).json({ message: "> [Server Error]: Такой персонаж уже существует." })
        }

        const character = new Character({
            characterName,
            characterClass,
            characterEliteLevel,
            characterLevel
        })

        await character.save()

        return res.status(200).json({ message: "> [Server OK]: Персонаж создан." })

    } catch (e) {
        res.status(500).json({ message: `[Server Error]: ${e.message}` })
    }
})

module.exports = router
