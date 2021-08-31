const axios = require("axios");
const express = require("express");
const app = express();
require("dotenv").config();

const apiKeyClist = `username=${process.env.USER_NAME}&api_key=${process.env.API_KEY_CLIST}`;
const apiKeyNews = `apiKey=${process.env.API_KEY_NEWS}`;

app.post("/contest", (req, res) => {
  var resource = req.body.resource;
  // console.log(req.body.resource);
  axios
    .get(
      `https://clist.by:443/api/v2/json/contest/?limit=30&resource=${resource}&order_by=-start&${apiKeyClist}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

app.get("/news-apple", (req, res) => {
  var currentTime = new Date().toJSON().slice(0, 10);
  axios
    .get(
      `https://newsapi.org/v2/everything?q=apple&from=${currentTime}&sortBy=popularity&${apiKeyNews}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      // console.log(response.data.articles.slice(0, 10));
      res.status(200).json(response.data.articles.slice(0, 10));
    })
    .catch((error) => {
      // console.log(error);
      res.status(500).json(error);
    });
});

app.get("/news-tesla", (req, res) => {
  var currentTime = new Date().toJSON().slice(0, 10);
  axios
    .get(
      `https://newsapi.org/v2/everything?q=tesla&from=${currentTime}&sortBy=popularity&${apiKeyNews}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      // console.log(response.data.articles.slice(0, 10));
      res.status(200).json(response.data.articles.slice(0, 10));
    })
    .catch((error) => {
      // console.log(error);
      res.status(500).json(error);
    });
});
app.post("/news-keyword", (req, res) => {
  var resource = req.body.resource;
  var currentTime = new Date().toJSON().slice(0, 10);
  // console.log(resource);
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${resource}&from=${currentTime}&sortBy=popularity&${apiKeyNews}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      res.status(200).json(response.data.articles.slice(0, 10));
    })
    .catch((error) => {
      // console.log(error);
      res.status(500).json(error);
    });
});

module.exports = app;
