"use strict";

const express = require("express");
const { json } = require("body-parser");

const serverRouter = require("./serverRouter");

const app = express();
app.use(json());

app.use("/api",serverRouter());

module.exports = app;
