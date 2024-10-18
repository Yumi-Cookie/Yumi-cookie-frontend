"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _homeControllers = require("../controllers/home.controllers.js");
var rutaHome = (0, _express.Router)();
rutaHome.get("/", _homeControllers.paginaPrincipal);
var _default = exports["default"] = rutaHome;