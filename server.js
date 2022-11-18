const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");
const reactViews = require("express-react-views");
const PORT = 3000;

// set up view engine
app.set("view engine", "jsx");

// create engine
app.engine("jsx", reactViews.createEngine());

// middleware
app.use((req, res, next) => {
  console.log("I'm running for all routes");
  next();
});

// Built-in middleware function in Express
app.use(express.urlencoded({ extended: false }));

// ============================================
//  ROUTES
// ============================================

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// === Index
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

// === New
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// === Post
app.post("/pokemon", (req, res) => {
  console.log(pokemon);
  pokemon.push(req.body);
  res.redirect("/pokemon");
});
// === Show
app.get("/pokemon/:id", (req, res) => {
  res.render("Show", pokemon[req.params.id]);
});

// === Listening Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
