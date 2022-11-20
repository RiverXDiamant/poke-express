// TODO: - Part 2 with Pokedex
// * require mongoose
// * create pokemon schema
// * add Model for pokemon
// * export modules

const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

// All -model names- should be capitalized
// Pokemon model

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

// Export modules
module.exports = Pokemon;

// const pokemon = [
//   { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg" },
//   { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg" },
//   { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg" },
//   { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg" },
//   { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg" },
//   { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg" },
//   { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg" },
// ];

// module.exports = pokemon;
