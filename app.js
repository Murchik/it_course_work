const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 3000

const app = express()

app.use('test', require('./routes/test_route'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('[Server Error]:', e.message)
        process.exit(1)
    }
}

start()
