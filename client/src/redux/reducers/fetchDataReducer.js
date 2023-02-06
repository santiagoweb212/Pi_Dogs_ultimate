import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCESS,
  FETCH_DATA_FAILURE,
} from "../types/index";
const initialState = {
  datos: [],
  loading: false,
  error: null,
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return { ...state, loading: true,error:null };
    case FETCH_DATA_SUCESS:
      return { ...state, loading: false, datos: action.payload.data };
    case FETCH_DATA_FAILURE:
      return { ...state, loading:false, error: action.payload.error };
    default:
      return state;
  }
};

