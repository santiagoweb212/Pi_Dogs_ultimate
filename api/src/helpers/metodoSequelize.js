const { Dog, Temperaments } = require("../db");
const factoriDog = (arr) => {
  return arr.map((dog) => {
    console.log(dog);
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height,
      peso: dog.peso,
      img: dog.img,
      life_span: dog.life_span,
      temperaments: dog.temperaments.map((e) => e.dataValues.name),
    };
  });
};
const metodosSequelize = async (
  metodo,
  value,
  nombreValor,
  limit,
  offset
) => {
  switch (metodo) {
    case "findAll":
      let allDogs = await Dog[metodo]({
        include: { model: Temperaments },
      });
      return allDogs;
    case "findOne":
      let dog = await Dog[metodo]({
        where: { [nombreValor]: value },
        include: { model: Temperaments },
      });
      if (dog == null)
        throw Error("no se pudo encontrar lo que estaba buscando");
      let dogF = factoriDog([dog]);
      return dogF;
    default:
      break;
  }
};
module.exports = { factoriDog, metodosSequelize };
