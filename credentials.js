module.exports = {
    google: {
        clientID:
            '585386088198-4k29koncgnvffgq11tqe2cngdittoq9l.apps.googleusercontent.com',
        clientSecret: 'YW3McFKClDrPuFI9UZj2C8E_',
        callbackURL: `http://0.0.0.0:${process.env.GOOGLE_PORT ||
            3000}/auth/google/callback`,
    },
    cookieSecret: ['asdfasdfasdfasdasdfas3214h23432j4l'],
    mongo: {
        connectionString:
            'mongodb+srv://root:root@cluster0-j3fvk.mongodb.net/test?retryWrites=true&w=majority',
    },
}
