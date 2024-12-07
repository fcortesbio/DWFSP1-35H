function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function numPadding(number) {
  return number > 999 ? number.toString : number.toString().padStart(3, "0")
}

const pokemonListContainer = document.getElementById("PokemonList");
const loadMoreButton = document.createElement("button");
loadMoreButton.textContent = "Load More Pokémon";
loadMoreButton.className = "load-button";
document.body.appendChild(loadMoreButton);

const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")

let query = "";
let pokemonCard; 


// Search button
searchInput.addEventListener("input", (ev)=>{
  query = ev.target.value;
})

searchButton.addEventListener("click", ()=>searchPokemon)

async function searchPokemon() {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
    if (!response.ok){
      throw new Error("Pokémon was not found. Please try again.")
    }
    const pokemon = response.json;
    // const pokemon = await fetchPokemonData(query);
  } catch(error){
    alert(error.map)
  }

}

// Fetch Pokemon data from PokeAPI
async function fetchPokemonData(pokemonId) {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      if (!response.ok) throw new Error(`Data for Pokemon ID: ${pokemonId} could not be fetched`);
      return await response.json();

  } catch (error) {
      console.error(error.message);
      return null;
  }
}

// Fetch data for individual types
async function fetchTypeRelationships(type) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    if (!response.ok) throw new Error(`Data for Type: ${type} could not be fetched`)
  } catch (error) { 
    console.log(error.message)
    return null;
  }
  
}

// Unfinished; will get a list with weaknesses of a type



// Load Pokedex with Pokemon Data
async function loadPokedex(startId = 1, endId = 20) {
  try {
      const pokemonPromises = [];
      for (let id = startId; id <= endId; id++) {
          pokemonPromises.push(fetchPokemonData(id));
      }
      const pokemonData = await Promise.all(pokemonPromises);
      pokemonData.forEach(displayPokemon);
  } catch (error) {
      console.error("Error loading Pokedex:", error.message);
  }
}

// Load more
let currentCount = 0;
loadMoreButton.addEventListener("click", async () => {
  currentCount += 20;
  await loadPokedex(currentCount + 1, currentCount + 20);
});



// Display Pokemon card
function displayPokemon(pokemon) {
  if (!pokemon) return; // Skip if no object found
  
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("container");
  
  // Get Abilities
  const abilities = pokemon.abilities.map(ability => capitalize(ability.ability.name)).join(", ");
  
  // Render HTML card
  pokemonCard.innerHTML = `
  <h2 class="pokemon-id-name">N.º ${numPadding(pokemon.id)} - ${capitalize(pokemon.name)}</h2>
  <img class="sprite" src="${pokemon.sprites.front_default}" alt="${pokemon.name} sprite">
  <div class="type">
  ${pokemon.types.map(type => 
    `<div class="${type.type.name}">${capitalize(type.type.name)}</div>`
  ).join('')}
  </div>
  <div class="abilities-list">
  <strong>Abilities:</strong>
  <p>${abilities}</p>
  </div>
  `;
  
  // Append to DOM
  pokemonListContainer.appendChild(pokemonCard);
}

// We start loading the first 20 objects
loadPokedex(1, 1);