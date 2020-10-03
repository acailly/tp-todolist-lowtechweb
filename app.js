const path = require("path");
const express = require("express");
const ejs = require("ejs");

// INITIALIZATION
const app = express();
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

// MIDDLEWARES
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1 day" }));

// VIEWS
const viewIndex = require("./views/index");
const viewList = require("./views/list");
const view404 = require("./views/404");

// ACTIONS
const actionNewItem = require("./actions/newItem");

// ROUTES
app.get("/", viewIndex);
app.get("/list", viewList);
app.post("/new-item", actionNewItem);
app.use(view404);

app.listen(5000, () => {
  console.log("App started! Go to http://localhost:5000/");
});
