import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCESS,
  FETCH_DATA_FAILURE,
} from "../types/index";
import axios from "axios";
const URL = "http://localhost:3100/dogs";
export const fetchData = () => {
  return async (dispatch) => {
   dispatch(fetchDataBegin());
    try {
        const res = await axios.get(URL);
        dispatch(fetchDataSucess(res.data))
        return res.data
    } catch (error) {
        dispatch(fetchDataFailure(error.message))
    }
  };
};
export const fetchDataBegin = () => {
  return { type: FETCH_DATA_BEGIN };
};
export const fetchDataSucess = (data) => {
  return { type: FETCH_DATA_SUCESS, payload: { data } };
};
export const fetchDataFailure = (error) => {
  return { type: FETCH_DATA_FAILURE, payload: { error } };
};
