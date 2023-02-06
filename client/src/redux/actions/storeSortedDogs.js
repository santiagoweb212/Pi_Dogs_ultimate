import {STORE_SORTED_DOGS,FILTER_DOGS} from "../types/index"
export const storeSortedDogs=(sortDogs)=>{
    return{type:STORE_SORTED_DOGS,payload:sortDogs}
}
export const filterDogs=(dogFilter)=>{
    return {type:FILTER_DOGS,payload:dogFilter}
}