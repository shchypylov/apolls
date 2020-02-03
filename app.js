const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/main");

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static("public"));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log("Server is up!")
});