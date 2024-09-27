import { Router } from "express";
import { paginaPrincipal } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/", paginaPrincipal);

export default rutaHome;