function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
function padWithZeros(number) {
    return (number >= 0 && number <= 999) ? number.toString().padStart(3, "0") : NaN;
}
  
const PokemonList = document.getElementById("PokemonList");
  
// Fetch PokeAPI data
async function fetchPokemonData(pokemonId) {
    let endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
    const response = await fetch(endpoint);
    const pokedata = await response.json();
    return pokedata;
}
  
// Display HTML content
function displayPokemon(pokemon) {
    console.log(pokemon);
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemonCard");
  
    // Get abilities
    let abilities = "";
    
    for (let ability of pokemon.abilities) {
        abilities += capitalize(ability.ability.name)+ ", ";
    }

  
    pokemonCard.innerHTML = `
      <div class="container">
        <h2 class="pokemon-id-name"> ${padWithZeros(pokemon.id) + " - " + capitalize(pokemon.name)}</h2>
        <img class="sprite" alt="sprite-of-" src="${pokemon.sprites.front_default}">
        <div class="type">
          <div class="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</div>
          ${pokemon.types.length > 1 ? `<div class="${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</div>` : ''}
        </div>
        <div class="abilities-list">
            <strong>Abilities:</strong>
            <p>${abilities}</p> 
        </div>
      </div>
    `;
    PokemonList.appendChild(pokemonCard);
  }
  
async function loadPokedex(n) {
    const pokemon = await fetchPokemonData(n);
    displayPokemon(pokemon);
}

for (let n = 1; n <= 1000; n++) {
    loadPokedex(n);
}