// Allow access for dotenv variables
// - dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
require("dotenv").config();

const express = require("express");
const app = express();
// const pokemon = require("./models/pokemon");
const Pokedex = require("./models/pokemon");
const reactViews = require("express-react-views");
const PORT = 3000;

// require mongoose
const mongoose = require("mongoose");

// connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected To Mongo"); // <-- shows that connection to mongo was successful
});

// set up view engine
app.set("view engine", "jsx");

// create engine
app.engine("jsx", reactViews.createEngine());

// middleware - runs in between the req, res cycle
// you have to call - next - in order to continue the req,res cycle
app.use((req, res, next) => {
  console.log("I'm running for all routes");
  next();
});

// Built-in middleware function in Express
// It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

// ============================================
//  ROUTES
// ============================================

// TODO: - Part 2 with Pokedex
// * rewrite Index Route to use Mongodb
// * rewrite Index View to work with Index Route
// * rewrite Show Route to Mongodb
// * export modules
// ============================================

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// * === Index

app.get("/pokemon", (req, res) => {
  Pokedex.find({}, (error, allPokemon) => {
    if (!error) {
      res.status(200).render("/pokemon/Index", {
        pokemon: allPokemon,
      });
    } else {
      res.status(400).send(error);
    }
  });
});

// * === New

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// * === Post

app.post("/pokemon", (req, res) => {
  console.log(pokemon);
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

// * === Show

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", pokemon[req.params.id]);
});

// * === Listening Port

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
