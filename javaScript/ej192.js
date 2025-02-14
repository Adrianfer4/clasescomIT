const urlApi = "https://pokeapi.co/api/v2/pokemon";
async function getPokemon() {
  try {
    const response = await fetch(urlApi);
    const datos = await response.json();
    datos.results.forEach((pokemon) => {
        const nombreCapitalizado = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
        
      console.log(`* Pokemon: ${nombreCapitalizado}`);
    });
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  }
}
getPokemon();
