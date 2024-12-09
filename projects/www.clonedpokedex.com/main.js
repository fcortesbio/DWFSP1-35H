function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  function numPadding(number) {
    return number > 999 ? number.toString() : number.toString().padStart(3, "0");
  }
  
  const pokemonListContainer = document.getElementById("pokemonList");
  const loadMoreButton = document.createElement("button");
  loadMoreButton.textContent = "Load More Pokémon";
  document.body.appendChild(loadMoreButton);
  
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  
  let query = "";
  searchInput.addEventListener("input", (ev) => {
    query = ev.target.value;
  });
  

  let pokemonCard; 
  
  async function searchPokemon() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) {
        throw new Error("Pokémon not found, please try again.");
      }
      const pokemon = await response.json();
  
      // Clear the container before displaying the searched Pokémon
      pokemonListContainer.innerHTML = ""; 
      displayPokemon(pokemon);
    } catch (error) {
      alert(error.message);
    }
  }
  
  searchButton.addEventListener("click", () => searchPokemon());
  
  async function fetchPokemonData(limit = 5, offset = 0) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      if (!response.ok) {
        throw new Error("Data could not be fetched");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  
  async function fetchPokemonDetails(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Data for Pokémon could not be fetched`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  
  async function loadPokedex(limit = 12, offset = 0) {
    try {
      const pokemonList = await fetchPokemonData(limit, offset);
      const pokemonDetailsPromises = pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url));
      const pokemonData = await Promise.all(pokemonDetailsPromises);
      pokemonData.forEach(displayPokemon);
    } catch (error) {
      console.error("Error loading Pokedex:", error.message);
    }
  }
  
  let currentOffset = 0;
  loadMoreButton.addEventListener("click", async () => {
    currentOffset += 5;
    await loadPokedex(5, currentOffset);
  });
  
  function displayPokemon(pokemon) {
    if (!pokemon) return;
  
    pokemonCard = document.createElement("div"); // Now pokemonCard is defined here
    pokemonCard.classList.add("container");
  
    const abilities = pokemon.abilities.map(ability => capitalize(ability.ability.name)).join(", ");
    
  
    pokemonCard.innerHTML = `
      <h2 class="pokemon-id-name">N.º ${numPadding(pokemon.id)} - ${capitalize(pokemon.name)}</h2>
      <img class="sprite" src="${pokemon.sprites.front_default}" alt="${pokemon.name} sprite">
      <div class="type">
        ${pokemon.types.map(type => `<div class="${type.type.name}">${capitalize(type.type.name)}</div>`).join('')}
      </div>
      <div class="abilities-list">
        <strong>Abilities:</strong>
        <p>${abilities}</p>
      </div>
    `;
  
    pokemonListContainer.appendChild(pokemonCard);
  }
  
  loadPokedex();