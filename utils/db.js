const mongoose = require('mongoose')
const {
    mongo: { connectionString },
} = require('../credentials.js/index.js')

if (!connectionString) {
    console.error('MongoDB connection string missing!')
    process.exit(1)
}

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', err => {
    console.error('MongoDB error: --- ' + err.message)
    process.exit(1)
})

db.once('open', () => console.log('MongoDB connection established'))
