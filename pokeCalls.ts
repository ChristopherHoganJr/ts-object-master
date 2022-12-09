import { pokémon } from "./pokemonObject";

// 1. an array of pokémon objects where the id is evenly divisible by 3
const divby3: Array<{ id: number; name: string; types: string[] }> =
  pokémon.filter((p) => p.id % 3 === 0);
// console.log(divby3);

// 2. an array of pokémon objects that are "fire" type
const firePokemon: Array<{ id: number; name: string; types: string[] }> =
  pokémon.filter((p) => p.types.includes("fire"));
// console.log(firePokemon);

// 3. an array of pokémon objects that have more than one type
const moreThanOneType: Array<{ id: number; name: string; types: string[] }> =
  pokémon.filter((p) => p.types.length > 1);
// console.log(moreThanOneType);

// 4. an array with just the names of the pokémon
const pokeNames: string[] = pokémon.map((p) => p.name);
// console.log(pokeNames);

// 5. an array with just the names of pokémon with an id greater than 99
const pokeNamesOver100: string[] = pokémon
  .filter((p) => p.id > 100)
  .map((p) => p.name);
// console.log(pokeNamesOver100);

// 6. an array with just the names of the pokémon whose only type is poison
const pokeNames1TypePoison: string[] = pokémon
  .filter((p) => p.types.includes("poison"))
  .filter((p) => p.types.length === 1)
  .map((p) => p.name);
// console.log(pokeNames1TypePoison);

// 7. an array containing just the first type of all the pokémon whose second type is "flying"
const pokemonSecondTypeFlying: string[] = pokémon
  .filter((p) => p.types[1] === "flying")
  .map((p) => p.types[0]);
// console.log(pokemonSecondTypeFlying);

// 8. a count of the number of pokémon that are "normal" type
const normalPokemonTypes: number = pokémon.filter((p) =>
  p.types.includes("normal")
).length;
// console.log(normalPokemonTypes);
