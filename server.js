const express = require("express");
const bodyParser = require("body-parser");

const axios = require("axios");
const { response } = require("express");
const app = express();
require("dotenv").config();

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

const apiKeyClist = `username=${process.env.USER_NAME}&api_key=${process.env.API_KEY_CLIST}`;
const apiKeyNews = `apiKey=${process.env.API_KEY_NEWS}`;
app.post("/contest", (req, res) => {
  var resource = req.body.resource;
  // console.log(req.body.resource);
  axios
    .get(
      `https://clist.by:443/api/v2/json/contest/?limit=30&resource=${resource}&order_by=-start&${apiKeyClist}`
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json("Server Error, try again latter");
    });
});

app.get("/news-apple", (req, res) => {
  var currentTime = new Date().toJSON().slice(0, 10);
  axios
    .get(
      `https://newsapi.org/v2/everything?q=apple&from=${currentTime}&sortBy=popularity&${apiKeyNews}`
    )
    .then((response) => {
      // console.log(response.data.articles.slice(0, 10));
      res.status(200).json(response.data.articles.slice(0, 10));
    })
    .catch((error) => {
      // console.log(error);
      res.status(500).json("Server Error, try again latter");
    });
});
app.get("/news-tesla", (req, res) => {
  var currentTime = new Date().toJSON().slice(0, 10);
  axios
    .get(
      `https://newsapi.org/v2/everything?q=tesla&from=${currentTime}&sortBy=popularity&${apiKeyNews}`
    )
    .then((response) => {
      // console.log(response.data.articles.slice(0, 10));
      res.status(200).json(response.data.articles.slice(0, 10));
    })
    .catch((error) => {
      // console.log(error);
      res.status(500).json("Server Error, try again latter");
    });
});
app.post("/news-keyword", (req, res) => {
  var resource = req.body.resource;
  var currentTime = new Date().toJSON().slice(0, 10);
  console.log(resource);
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${resource}&from=${currentTime}&sortBy=popularity&${apiKeyNews}`
    )
    .then((response) => {
      res.status(200).json(response.data.articles.slice(0, 10));
    })
    .catch((error) => {
      // console.log(error);
      res.status(500).json("Server Error, try again latter");
    });
});


const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
