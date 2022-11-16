const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");
const reactViews = require("express-react-views");
const PORT = 3000;

// set up view engine
app.set("view engine", "jsx");
// create engine
app.engine("jsx", reactViews.createEngine());

// route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

// Listening Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
