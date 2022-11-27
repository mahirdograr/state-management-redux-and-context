import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [name, setName] = useState("");

  let dispath = useDispatch();

  const addNewTodo = () => {
    let randomId = Math.floor(Math.random() * 1000);
    // useDispatch hooku ile redux üzerindeki global statei değiştiriyorum bunun için reducera erişiyorum
    // globaldeki veriyi merak ediyorsan useselector globaldeki veriyi değiştirmek istiyorsan eğer usedispatch
    let newTodo = {
      id: randomId,
      name: name,
      isComplated: false,
    };

    dispath({ type: "ADD_TODO", payload: newTodo });
  };
  return (
    <>
      <div>
        <label>NEW TODO</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={() => addNewTodo()}>ADD</button>
      </div>
    </>
  );
};

export default AddTodo;

// let todos = [
//     {
//         id:3,
//         name:'login page component',
//         isComplate:true
//     }
// ]
