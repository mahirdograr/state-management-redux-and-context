import React from "react";
import { useSelector, useStore } from "react-redux";

const CounterHeader = () => {
  //Bu component redux üzerindeki state ten counter sayısını çekip yazacak.

  const counter = useSelector((state) => state.counterReducer);

  const store = useStore();

  console.log("buraya-yaz", store.getState());
  return <div>Counter: {counter}</div>;
};

export default CounterHeader;

//action ve reducer arasında karşılayan mekanizmaya middleware denir.
