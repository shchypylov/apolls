const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {
    google: { clientID, clientSecret, callbackURL },
} = require('../credentials.js/index.js')

module.exports = passport => {
    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })

    passport.use(
        new GoogleStrategy(
            {
                clientID,
                clientSecret,
                callbackURL,
            },
            (token, refreshToken, profile, done) => {
                return done(null, {
                    profile: profile,
                    token: token,
                })
            }
        )
    )
}
