import { config } from "dotenv";
config();

export const paginaPrincipal = (req, res) => {
    res.render("views.home.ejs")
};