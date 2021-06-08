const { Router } = require('express')
const Character = require('../models/Character')
const router = Router()

// /edit route
router.put('/', async (req, res) => {
    try {
        console.log('> [Server recived /edit request] Body: ', req.body)

        const {
            characterName,
            characterClass,
            characterEliteLevel,
            characterLevel,
            characterWinrate
        } = req.body

        const character = await Character.findOne({ characterName })

        if (!character) {
            return res.status(400).json({ message: "> [Server Error]: Такого персонажа не существует." })
        }

        character.characterClass = characterClass
        character.characterEliteLevel = characterEliteLevel
        character.characterLevel = characterLevel
        character.characterWinrate = characterWinrate

        await character.save()

        return res.status(200).json({ message: "> [Server OK]: Персонаж изменён." })

    } catch (e) {
        res.status(500).json({ message: `[Server Error]: ${e.message}` })
    }
})

module.exports = router
