import express from "express";
import { config } from "dotenv";
import ruta from "./routes/index.js";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import cookieParser from "cookie-parser";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(morgan("dev"));
server.use(cookieParser());
server.set("view engine", "ejs");
server.set("views", path.join(__dirname + "/views"))
server.set("port", process.env.PORT || 4000);
server.use(express.static(path.join(__dirname + "/public")));

server.use("/", ruta);

server.use("/", (req,res)=>{
    res.render("views.error.ejs")
});

export default server;