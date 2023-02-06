import { STORE_SORTED_DOGS,FILTER_DOGS } from "../types";
const initiaState = {
  sortedDogs: [],
  filterDogs:[]
};
export const sortedDogsReducer = (state = initiaState, action) => {
  switch (action.type) {
    case STORE_SORTED_DOGS:
      return { ...state, sortedDogs: action.payload };
      case FILTER_DOGS:
        return {...state,filterDogs:action.payload}
    default:
      return state;
  }
};
