// TODO: - Part 2 with Pokedex
// * require mongoose
// * create pokemon schema
// * add Model for pokemon
// * export modules

const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

// All -model names- should be capitalized
// Pokemon model

const Pokedex = mongoose.model("Pokedex", pokemonSchema);

// Export modules
module.exports = Pokedex;

// const pokemon = [
//   { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
//   { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
//   { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
//   { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
//   { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
//   { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
//   { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
// ];

// module.exports = pokemon;
