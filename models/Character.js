const { Schema, model } = require('mongoose')

const schema = new Schema({
    characterName:       { type: String, required: true, unique: true },
    characterClass:      { type: String, required: true },
    characterEliteLevel: { type: Number },
    characterLevel:      { type: Number },
    characterWinrate:    { type: Number },
})

module.exports = model('Character', schema)
