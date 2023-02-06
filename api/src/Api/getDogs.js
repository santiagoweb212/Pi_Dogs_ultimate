const axios = require("axios");
const { allDogs } = require("../helpers/allDogs");
const { Dog, Temperaments } = require("../db.js");
let clave = {
  "x-api-key":
    "live_VRsQskXmI7rbyAT8XS3xDfm7Ak8TR6AIUxOH22i6Zp8Wqt7CW9ZKTsqE3vLSANqG",
};
let url = "https://api.thedogapi.com/v1/breeds";
async function getDogs() {
  try {
    const data = await axios.get(url, {
      headers: clave,
    });
    let dogs = allDogs(data);
    dogs.Ftemperament.forEach(
      async (t) =>
        await Temperaments.findOrCreate({ where: { name: t } })
    );
    
    for (let i = 0; i < dogs.dogData.length; i++) {
      let dog = await Dog.create(dogs.dogData[i]);
      let temper = await Temperaments.findAll({
        where: {
          name: dogs.dogData[i].temperamento,
        },
      });
      dog.addTemperaments(temper);
    }
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = { getDogs };
