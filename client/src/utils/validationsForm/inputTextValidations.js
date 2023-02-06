export function inputTextValidation(valueInput) {
  const {
    breedName,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpanMin,
    lifeSpanMax,
    imagen,
    temperaments,
  } = valueInput;
  const errors = {};

  if (breedName.trim() === "") {
    errors.breedName = "Please enter a breed name";
  } else if (breedName.trim().length <= 3) {
    errors.breedName = "Breed name must be greater than 3 characters";
  }

  return errors;
}
