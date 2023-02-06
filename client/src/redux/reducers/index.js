import { combineReducers } from "redux";
import { fetchDataReducer } from "./fetchDataReducer";
import {fetchDataTemperamentsReducer} from "./fetchDataDogsTemperamentsReducer"
import {sortedDogsReducer} from "./sortedDogsReducer"
import {createDogReducer} from "./createDogReducer"
const rootReducer = combineReducers({
  fetchDataReducer,
  fetchDataTemperamentsReducer,
  sortedDogsReducer,
  createDogReducer
});
export default rootReducer;
