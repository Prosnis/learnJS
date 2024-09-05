function getSwapiPagerator(endpoint) {
  return async function* () {
    let nextUrl = `http://swapi.dev/api/${endpoint}`;
    while (nextUrl) {
      const response = await fetch(nextUrl);
      const data = await response.json();
      nextUrl = data.next; 
      yield* data.results; 
    }
  }
} 


starWars = {
  planets: {
    [Symbol.asyncIterator]: getSwapiPagerator('planets')
  }
};

const results = [];

(async () => { 

  for await (const planet of starWars.planets) {
    console.log(planet.name);
    results.push(planet.name);
  }
  console.log('All planets:', results); 
})();
