import React from "react";
import { useSelector } from "react-redux";

const CounterHeader = () => {
  //Bu component redux üzerindeki state ten counter sayısını çekip yazacak.

  const state = useSelector((counter) => counter);

  return <div>Counter: {state}</div>;
};

export default CounterHeader;
