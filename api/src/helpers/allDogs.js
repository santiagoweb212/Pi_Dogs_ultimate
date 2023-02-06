const allDogs = (dogs) => {
  let data = dogs.data.filter((e) => e.temperament !== undefined);
  let temperament = data.map((dog) => dog.temperament);
  
  let nuevo = [];
  temperament = temperament.toString().split(",");
  temperament.forEach((t) => nuevo.push(t.trim()));
  
  let Ftemperament = new Set(nuevo);
  
  let dogData = data.map((dog) => {
    let temp = [];
    if (dog.temperament) {
      dog.temperament.split(",").forEach((t) => temp.push(t.trim()));
    }
    let height = [
      { imperial: dog.height.imperial, metric: dog.height.metric },
    ];
    let peso = [
      { imperial: dog.weight.imperial, metric: dog.weight.metric },
    ];
    return {
      name: dog.name.toLowerCase(),
      height: height,
      peso: peso,
      life_span: dog.life_span,
      img: dog.image.url,
      temperamento: temp,
    };
  });

  return { Ftemperament, dogData };
};
module.exports = { allDogs };
