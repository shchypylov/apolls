const express = require('express');

const pageContexts = require('../utils/contexts');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.token) {
    res.cookie('token', req.session.token);
  } else {
    res.cookie('token', '');
  }
  res.render('main', {...pageContexts.main, isAuthenticated: req.session.token})
});

router.get('/demo', (_, res) => {
  res.render('demo', pageContexts.demo)
});

router.post('/demo/submit', (req, res) => {
  req.session.demoData = req.body
  res.redirect(303, `/demo/submit/success`)
});

router.get('/demo/submit/success/', (req, res) => {
  res.locals.demoData = req.session.demoData
  res.render('demoSuccess', req.query)
});



module.exports = router;
