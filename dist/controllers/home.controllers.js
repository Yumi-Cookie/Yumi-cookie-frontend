"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginaPrincipal = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var paginaPrincipal = exports.paginaPrincipal = function paginaPrincipal(req, res) {
  res.render("views.home.ejs");
};