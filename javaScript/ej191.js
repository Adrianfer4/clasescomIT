const urlApi = "https://pokeapi.co/api/v2/pokemon";
fetch(urlApi)
  .then((res) => res.json()) 
    .then((datos) => {
    datos.results.forEach((pokemon) => {
      const nombreCapitalizado =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);

      console.log(`* Pokemon: ${nombreCapitalizado}`);
    });
  })
  .catch((error) => {
    console.log("ERROR");
    console.log(error);
  });

