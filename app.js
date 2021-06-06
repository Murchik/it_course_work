const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 8080

const app = express()

app.use(express.json({ extended: true }))
app.use('/add', require('./routes/AddCharacter'))
app.use('/list', require('./routes/List'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`> [Server is up and running on port ${PORT}]`))
    } catch (e) {
        console.log('> [Server Error]:', e.message)
        process.exit(1)
    }
}

start()
