import { todoreducer } from "./todo.reducer";
import { counterReducer } from "./counter.reducer";
import { combineReducers } from "redux";

//2 tane reducer birleştirmeye yarıyor

export default combineReducers({
  counterReducer,
  todoreducer,
});
