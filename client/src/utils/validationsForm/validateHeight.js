export const validateHeightMin = (heightMin, heightMax) => {
  const errors = {};
  let heightMinN = Number(heightMin);
  let heightMaxN = Number(heightMax);
  if (heightMin.trim() === "") {
    errors.height = "Please enter a height min ";
  } else if (heightMinN === 0) {
    errors.height = "heightMin cannot be zero";
  }
  if (heightMinN && heightMinN === heightMaxN) {
    errors.height = "min height cannot be equal to max height";
  }
  if (heightMaxN && heightMinN > heightMaxN) {
    errors.height =
      "Minimum height cannot be greater than maximum height";
  }
  return errors;
};
export const validateHeightMax = (heightMax, heightMin) => {
  const errors = {};
  let heightMaxN = Number(heightMax);
  let heightMinN = Number(heightMin);
  if (heightMax.trim() === "") {
    errors.height = "Please enter a height max ";
  } else if (heightMaxN === 0) {
    errors.height = "height Max cannot be zero";
  }
  if (heightMaxN && heightMinN === heightMaxN) {
    errors.height = "max height cannot be equal to min height";
  }
  if (heightMaxN && heightMinN > heightMaxN) {
    errors.height =
      "Minimum height cannot be greater than maximum height";
  }
  return errors;
};
