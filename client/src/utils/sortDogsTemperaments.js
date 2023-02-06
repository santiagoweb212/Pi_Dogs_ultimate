export const sortDogsTemperaments=(dog,temperamento)=>{
    let filterDog = [];
    dog.forEach((element) => {
      element.temperaments.forEach((e) => {
        if (e === temperamento) {
          filterDog.push(element);
        }
      });
    });
    return filterDog
}