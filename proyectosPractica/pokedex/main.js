function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function numPadding(number) {
  return number.toString().padStart(3, "0");
}

// DOM Reference
const pokemonListContainer = document.getElementById("PokemonList");
const loadMoreButton = document.createElement("button"); // Create the button element
loadMoreButton.textContent = "Load More Pokémon" //attribue text.Content
document.body.appendChild(loadMoreButton) // Append button to html document

// Fetch Pokemon data from PokeAPI
async function fetchPokemonData(pokemonId) {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      if (!response.ok) throw new Error(`Failed to fetch data for Pokemon ID: ${pokemonId}`)
      return await response.json()
  } catch (error) {
      console.error(error.message)
      return null
  }
}

// Display Pokemon card
function displayPokemon(pokemon) {
  if (!pokemon) return; // if no object found returns nothing (skip when fetching cannot complete)

  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("container");

  // Get Abilities
  const abilities = pokemon.abilities.map(ability => capitalize(ability.ability.name)).join(", ");

  // Render HTML card
  pokemonCard.innerHTML = `
      <h2 class="pokemon-id-name">${numPadding(pokemon.id)} - ${capitalize(pokemon.name)}</h2>
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
  `

  // Append to DOM
  pokemonListContainer.appendChild(pokemonCard);
}

// Load Pokedex with Pokemon Data
async function loadPokedex(startId = 1, endId = 100) {
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

// Load More Functionality
let currentCount = 0; 
loadMoreButton.addEventListener("click", async () => {
  currentCount += 20;
  await loadPokedex(currentCount + 1, currentCount + 20);
});

// Initial Load (optional)
loadPokedex(1, 50);