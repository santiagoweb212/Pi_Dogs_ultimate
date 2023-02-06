const { Dog, Temperaments } = require("../db");
const {
  metodosSequelize,
  factoriDog,
} = require("../helpers/metodoSequelize");
const getDogs = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let dog = await metodosSequelize("findOne", name, "name");
      return res.json(dog);
    }
    let data = await metodosSequelize("findAll");
    let dogs = factoriDog(data);
    let count = await Dog.count();
    console.log(count);
    return res.json({ dogs, count });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const getDogsIdRaza = async (req, res) => {
  const { idRaza } = req.params;
  try {
    let dog = await metodosSequelize("findOne", idRaza, "id");
    return res.json(dog);
  } catch (error) {
    res.json(error.message);
  }
};

const getTemperaments = async (re, res) => {
  const temperaments = await Temperaments.findAll();
  res.json(temperaments);
};
const postCreateDog = async (req, res) => {
  try {
    const { name, height, peso, life_span, img, temperaments } =
      req.body;
    let newDog = await Dog.create({
      name,
      height,
      peso,
      life_span,
      img,
    });
    let t = await Temperaments.findAll({
      where: {
        name: temperaments,
      },
    });
    newDog.addTemperaments(t);
    res.json(newDog);
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  getDogs,
  getDogsIdRaza,
  getTemperaments,
  postCreateDog,
};
