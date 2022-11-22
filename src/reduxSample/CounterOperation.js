import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CounterOperation = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE", payload: Number(number) });
  };

  // useSelect => mevcut state çeker ve o componentin STORE a yani reduxa abone olmasını sağlar
  // useDispatch => Componentten reducese bir action fırlatmamızı sağlar
  //Suanda operation dispatch ile action gönderiyor. Bu action reducera gidiyor diyor ki bunu yükselt sonra bu app jse gidiyor
  // diyorki bu sayıyı yükselttik daha sonra counterheader da diyor ki bu sayı yükseldi bunu güncelleyeyim

  const decrease = () => {
    dispatch({ type: "DECREASE", payload: Number(number) });
  };
  return (
    <div>
      <div>
        <label>Number: </label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>

      <button onClick={() => increase()}>+</button>
      <br />
      <br />
      <button onClick={() => decrease()}> - </button>
    </div>
  );
};

export default CounterOperation;
