export const searchDogs=(dogs,valueName)=>{
 return dogs.dogs.filter(dog=>dog.name===valueName)
}