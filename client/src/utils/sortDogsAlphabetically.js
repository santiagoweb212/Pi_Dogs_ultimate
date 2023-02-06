export function sortDogsAlphabetically(dogs, opcion) {
  const copyDogs = [...dogs];
  switch (opcion) {
    case "A-Z":
      let dog = copyDogs.sort(function (a, b) {
        return a.name
          .toUpperCase()
          .localeCompare(b.name.toUpperCase(), "es");
      });
      return dog;
    case "Z-A":
      let dogs = copyDogs.sort(function (a, b) {
        return b.name
          .toUpperCase()
          .localeCompare(a.name.toUpperCase(), "es");
      });
      return dogs;
    default:
      break;
  }
}
