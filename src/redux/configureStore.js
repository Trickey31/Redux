import { createStore, combineReducers } from "redux";
import counterReducer from "./counter";

const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;
