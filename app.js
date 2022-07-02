const express = require("express");
const app = express();
const colors = require("colors");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(8080, () => {
    console.log("Serving on port 8080 :)".magenta.bold);
})