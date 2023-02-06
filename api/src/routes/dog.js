const { Router } = require("express");
const {
  getDogs,
  getDogsIdRaza,
  getTemperaments,
  postCreateDog,
} = require("../controller/getDogs");
const dog = Router();
dog.get("/dogs", getDogs);
dog.get("/dogs/:idRaza", getDogsIdRaza);
dog.get("/temperaments", getTemperaments);
dog.post("/dog",postCreateDog)
module.exports = { dog };
