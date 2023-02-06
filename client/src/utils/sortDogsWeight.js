export const sortDogsWeight = (dog, option) => {
  const copyDogs = [...dog];

  switch (option) {
    case "Min":
      let weightMin = copyDogs.sort((a, b) => {
        return (
          Number(a.peso[0].metric.split("-")[0]) -
          Number(b.peso[0].metric.split("-")[0])
        );
      });
      return weightMin;
    case "Max":
      let weightMax = copyDogs.sort((a, b) => {
        return (
          Number(b.peso[0].metric.split("-")[1]) -
          Number(a.peso[0].metric.split("-")[1])
        );
      }); 
      return weightMax;
    default:
      break;
  }
};
