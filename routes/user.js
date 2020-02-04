const router = require('express').Router();
const passport = require('passport');
const pageContexts = require('../utils/contexts');

router.get('/login', (_, res) => {
    res.render('login', pageContexts.login)
});

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile'],
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
    }),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect(303, '/')
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/')
});

module.exports = router;
