import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../redux-toolkit/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = (value) => {
    dispatch(incrementByValue(10));
  };
  return (
    <div className="w-[500px] mx-auto mt-10 flex flex-col items-center">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-3">
        <button
          className="p-3 bg-purple-500 rounded-lg"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="p-3 bg-purple-500 rounded-lg"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="p-3 bg-purple-500 rounded-lg"
          onClick={handleIncrementByValue}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
