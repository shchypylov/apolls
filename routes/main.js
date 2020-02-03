const express = require('express');
const pageContexts = require('../utils/contexts');
const { toQueryString } = require('../utils/helpers');
const router = express.Router();

router.get('/', (_, res) => {
    res.render('main', pageContexts.main)
});

router.get('/demo', (_, res) => {
    res.render('demo', pageContexts.demo)
});

//todo Move to sessions
router.post('/demo/submit', (req, res) => {
    const encodedData = toQueryString({ ...req.body });

    res.redirect(303, `/demo/submit/success?${encodedData}`)
});

router.get('/demo/submit/success/', (req, res) => {
    res.render('demoSuccess', req.query)
});

module.exports = router;
