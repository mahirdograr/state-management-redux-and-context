import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ToDoList = () => {
  //Redux içerisinde bulunan GLOBAL state ulaşmak için useselect HOOK'unu kullanıyoruz

  let todos = useSelector((state) => state.todoreducer);
  let dispatch = useDispatch();

  const deleteTodo = (item) => {
    dispatch({ type: "REMOVE_TODO", payload: item });
  };

  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL_TODO" });
  };
  return (
    <>
      <h1>Count : {todos.length}</h1>
      <button onClick={() => removeAll()}>Remove All</button>
      <ul>
        {todos &&
          todos.map((item, key) => {
            return (
              <>
                <li id={item.id}>{item.name}</li>
                <button onClick={() => deleteTodo(item)}>DELETE</button>
              </>
            );
          })}
      </ul>
    </>
  );
};

export default ToDoList;
