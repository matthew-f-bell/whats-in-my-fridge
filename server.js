require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules ==== */
const app = express();

/* ==== Configuration ==== */
const PORT = 4000 ;
app.set("view engine", "ejs");

/* ==== Middleware ==== */
// body data middleware
app.use(express.urlencoded({ extended: true}));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// logger
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

/* ==== Routes && Controllers ==== */
// home route
app.get("/", (req, res) => {
    res.render("index")
});

// 404 route
app.get((req, res) => {
    res.send("404! Error! Page not found >:(")
});

// Internal Routes
app.use("/foods", routes.foods);

/* ==== Server bind ==== */
app.listen(PORT, () => {
    console.log(`I am a little working server on http://localhost:${PORT}`);
});