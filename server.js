const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./routes/api"));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
