import React from "react";
import CounterHeader from "./reduxSample/CounterHeader";
import CounterOperation from "./reduxSample/CounterOperation";
import { counterReducer } from "./store/reducers/counter.reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import { FavoriteProvider } from "./contextsample/FavoriteProductContext";
// import ProductHeader from "./contextsample/ProductHeader";
// import ProductPage from "./contextsample/ProductPage";
// bu stateler eklendiği taktirde state üzerinde veri kullanma çalışacaktır
// import CategoryPage from "./stateSample/CategoryPage";
// import SiteHeader from "./stateSample/SiteHeader";

var counterStore = createStore(counterReducer);

const App = () => {
  return (
    <>
      <Provider store={counterStore}>
        <CounterHeader />
        <CounterOperation />
      </Provider>

      {/* <FavoriteProvider>
        <ProductHeader />
        <ProductPage />
      </FavoriteProvider> */}
    </>
  );
};

export default App;
