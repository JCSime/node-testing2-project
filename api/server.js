const express = require("express");

const Printer = require("./3d_printers/3d_printers-model");
const printersRouter = require('./3d_printers/3d_printers-router')

const server = express();

server.use(express.json());

// server.use('/printers', printersRouter)

module.exports = server;
