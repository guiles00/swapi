"use strict";

const express = require("express");
const swapiRouter = require("./routes/swapi");

module.exports = function () {

  const router = express.Router();
  const swapi = swapiRouter();

  router.get("/people", swapi.getPeople);
  
  router.get("/planets", swapi.getPlanets);

  router.all("*", (req, res, next) => { 
    res.status(404).send({ msg:"Endpoint Not Found"});  
  });

  return router;
};
