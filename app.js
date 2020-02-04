const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const {cookieSecret} = require("./credentials.json")


const mainRouter = require("./routes/main");
const authRouter = require("./routes/user")
const auth = require("./utils/auth");


const PORT = process.env.PORT || 3000;
const app = express();

auth(passport);
app.use(passport.initialize());

app.use(cookieSession({
  name: 'session',
  keys: cookieSecret
}));

app.use(cookieParser());

app.set('view engine', 'pug');
app.use('/static', express.static("public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.originalUrl);
  if (req.originalUrl !== '/demo/submit/success') {
    delete req.session.demoData
  }
  next()
})

app.use(mainRouter);
app.use(authRouter);
app.use((req, res) => {
  res.render("404")
})

app.use((err, req, res, next) => {
  console.log(err);
  res.render("500")
})

app.listen(PORT, () => {
  console.log("Server is up!")
});