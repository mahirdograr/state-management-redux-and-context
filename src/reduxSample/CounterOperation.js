import React from "react";
import { useDispatch } from "react-redux";

const CounterOperation = () => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE" });
  };

  // useSelect => mevcut state çeker ve o componentin STORE a yani reduxa abone olmasını sağlar
  // useDispatch => Componentten reducese bir action fırlatmamızı sağlar
  //Suanda operation dispatch ile action gönderiyor. Bu action reducera gidiyor diyor ki bunu yükselt sonra bu app jse gidiyor
  // diyorki bu sayıyı yükselttik daha sonra counterheader da diyor ki bu sayı yükseldi bunu güncelleyeyim

  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };
  return (
    <div>
      <button onClick={() => increase()}>+</button>
      <br />
      <br />
      <button onClick={() => decrease()}> - </button>
    </div>
  );
};

export default CounterOperation;
