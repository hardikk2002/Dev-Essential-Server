const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const apiKey = `username=${process.env.USER_NAME}&api_key=${process.env.API_KEY}`;


app.get("/resource*", (req, res) => {
  axios
    .get(
      `https://clist.by:443/api/v1/json/resource/?name__iregex=${req.query.name__iregex}&${apiKey}`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(200).json("Server is 404");
    });
});

app.get("/contest", (req, res) => {
  axios
    .get(
      `https://clist.by:443/api/v2/json/contest/?&${apiKey}`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(200).json("Server is 404");
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
