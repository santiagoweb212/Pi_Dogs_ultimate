import {
  FETCH_DATA_BEGIN_TEMPERAMENTS,
  FETCH_DATA_SUCESS_TEMPERAMENTS,
  FETCH_DATA_FAILURE_TEMPERAMENTS,
} from "../types/index";
const initialState = {
  temperaments: [],
  loading: false,
  error: null,
};
export const fetchDataTemperamentsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN_TEMPERAMENTS:
     
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCESS_TEMPERAMENTS:
      return { ...state,
        temperaments:action.payload, loading: false };
    case FETCH_DATA_FAILURE_TEMPERAMENTS:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
