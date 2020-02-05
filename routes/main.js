const express = require('express')
const Note = require('../models/note')

const pageContexts = require('../utils/contexts')
const router = express.Router()

router.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token)
    } else {
        res.cookie('token', '')
    }

    res.render('main', pageContexts.main)
})

/* Demo routes */

router.get('/demo', (_, res) => {
    res.render('demo', pageContexts.demo)
})

router.post('/demo/submit', (req, res) => {
    req.session.demoData = req.body
    res.redirect(303, `/demo/submit/success`)
})

router.get('/demo/submit/success/', (req, res) => {
    res.locals.demoData = req.session.demoData
    res.render('demoSuccess', req.query)
})

/* Note routes */

router.get('/notes', async (req, res) => {
    const notes = await Note.find({ id: req.session.passport.user.profile.id })

    res.render('notes', { ...pageContexts.notes, notes: notes.reverse() })
})

router.post('/notes/add', (req, res) => {
    const { id } = req.session.passport.user.profile
    const { text } = req.body

    if (id && text) {
        const note = new Note({ text, id, date: Date.now() })

        note.save().catch(e => console.log(e))
    }
    res.redirect(303, '/notes')
})

module.exports = router
