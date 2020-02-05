const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    text: String,
    id: Number,
    date: Date,
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
