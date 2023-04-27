const express = require("express");
const chalk = require("chalk");
const path = require("path");
const hbs = require("hbs");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const publicDir = path.join(__dirname, "views");
app.set('view engine', 'hbs');
app.set("views", publicDir);
app.use(express.static(publicDir));
hbs.registerPartials(__dirname + '/views/templates');
app.get('', (req, resp) => {
    resp.render("index", {
        content: "je suis le <div> contenue </div> de la page"
    });
});
app.get("/signin", (req, resp) => {
    resp.render('pages/signin');
});
app.get("/signup", (req, resp) => {
    resp.render('pages/signup');
});
app.get("*", (req, resp) => {
    resp.render('pages/404');
});
app.listen(PORT, () => {
    console.log('Le serveur a démarré sur la route : ' + chalk.blue.bold("localhost:%s") + ' ...', PORT);
});
