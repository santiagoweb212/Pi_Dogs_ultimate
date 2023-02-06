import { SAVE_FORM_DOG_DATA } from "../types/index";
const initialState = {
  breedName: "",
  heightMin: "",
  heightMax: "",
  weightMin: "",
  weightMax: "",
  lifeSpanMin: "",
  lifeSpanMax: "",
  imagen: "",
  temperaments:[]
};
export const createDogReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SAVE_FORM_DOG_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
