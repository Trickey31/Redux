import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

// const loggerMiddleWare = (store) => (next) => (action) => {
//   console.log(action);
//   next(action);
// };
// function loggerMiddleWare(store) {
//   return function (next) {
//     return function (action) {};
//       your code here
//   };
// }

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// sagaMiddleware.run(mySaga);

// store.subscribe(() => {
//   //javascript observer pattern
//   console.log(`currentState: ${store.getState().counter.count}`);
// });
store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));

export default store;
