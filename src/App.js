import React from "react";
import CounterHeader from "./reduxSample/CounterHeader";
import CounterOperation from "./reduxSample/CounterOperation";
// import { counterReducer } from "./store/reducers/counter.reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import ToDoList from "./reduxSample/ToDoList";
import AddTodo from "./reduxSample/AddTodo";
//import { todoreducer } from "./store/reducers/todo.reducer";
import mainReducer from "./store/reducers/index";
// import { FavoriteProvider } from "./contextsample/FavoriteProductContext";
// import ProductHeader from "./contextsample/ProductHeader";
// import ProductPage from "./contextsample/ProductPage";
// bu stateler eklendiği taktirde state üzerinde veri kullanma çalışacaktır
// import CategoryPage from "./stateSample/CategoryPage";
// import SiteHeader from "./stateSample/SiteHeader";

//var counterStore = createStore(counterReducer);
//var todoStore = createStore(todoreducer);

var store = createStore(mainReducer);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/todos">ToDoList</Link>
          <Link to="/addtodo">ADD TODO</Link>
          <Link to="/counterheader">CounterHeader</Link>
          <Link to="/counteroperation">CounterOperation</Link>
        </nav>

        <Routes>
          <Route path="/todos" element={<ToDoList />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/counterheader" element={<CounterHeader />} />
          <Route path="/counteroperation" element={<CounterOperation />} />
        </Routes>
      </Provider>

      {/* <FavoriteProvider>
        <ProductHeader />
        <ProductPage />
      </FavoriteProvider> */}
    </>
  );
};

export default App;
