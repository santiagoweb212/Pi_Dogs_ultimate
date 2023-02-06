export const validteWeightMin = (weightMin, weightMax) => {
  const errors = {};
  let weightMinN = Number(weightMin);
  let weightMaxN = Number(weightMax);
  if (weightMin.trim() === "") {
    errors.weight = "Please enter a weight min ";
  } else if (weightMinN === 0) {
    errors.weight = "weightMin cannot be zero";
  }
  if (weightMinN && weightMinN === weightMaxN) {
    errors.weight = "min weight cannot be equal to max weight";
  }
  if (weightMaxN && weightMinN > weightMaxN) {
    errors.weight =
      "Minimum weight cannot be greater than maximum weight";
  }
  return errors;
};
export const validteWeightMax = (weightMax, weightMin) => {
  const errors = {};
  let weightMaxN = Number(weightMax);
  let weightMinN = Number(weightMin);
  if (weightMax.trim() === "") {
    errors.weight = "Please enter a weight max ";
  } else if (weightMaxN === 0) {
    errors.weight = "weight Max cannot be zero";
  }
  if (weightMaxN && weightMinN === weightMaxN) {
    errors.weight = "max weight cannot be equal to min weight";
  }
  if (weightMaxN && weightMinN > weightMaxN) {
    errors.weight =
      "Minimum weight cannot be greater than maximum weight";
  }
  return errors;
};
