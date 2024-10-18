"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _homeRoutes = _interopRequireDefault(require("./home.routes.js"));
var ruta = (0, _express.Router)();
ruta.use("/", _homeRoutes["default"]);
var _default = exports["default"] = ruta;