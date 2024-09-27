import { Router } from "express";
import rutaHome from "./home.routes.js";

const ruta = Router();

ruta.use("/", rutaHome)

export default ruta;