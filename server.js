const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");
const reactViews = require("express-react-views");
const PORT = 3000;

// set up view engine
app.set("view engine", "jsx");
// create engine
app.engine("jsx", reactViews.createEngine());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// setting up Index route
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

//setting up Show route
app.get("pokemon/:id", (req, res) => {
  res.render("Show", pokemon[req.params.id]);
});

// Listening Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
