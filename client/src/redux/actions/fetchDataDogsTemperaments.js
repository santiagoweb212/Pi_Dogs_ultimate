import axios from "axios";
import {
  FETCH_DATA_BEGIN_TEMPERAMENTS,
  FETCH_DATA_SUCESS_TEMPERAMENTS,
  FETCH_DATA_FAILURE_TEMPERAMENTS,
} from "../types/index";
const URL = "http://localhost:3100/temperaments";
export const fetchDataDogsTemperaments = () => {
  return async (dispatch) => {
    dispatch(fetchDataBeginTemperaments());
    try {
      const temperaments = await axios.get(URL);
      
      dispatch(fetchDataSucessTemperaments(temperaments.data))
      return temperaments.data
    } catch (error) {
        dispatch(fetchDataFailureTemperaments(error.message))
    }
  };
};
export const fetchDataBeginTemperaments = () => {
  return { type: FETCH_DATA_BEGIN_TEMPERAMENTS };
};
export const fetchDataSucessTemperaments = (temperaments) => {
  return {
    type: FETCH_DATA_SUCESS_TEMPERAMENTS,
    payload: temperaments,
  };
};
export const fetchDataFailureTemperaments = (error) => {
  return { type: FETCH_DATA_FAILURE_TEMPERAMENTS, payload: error };
};
