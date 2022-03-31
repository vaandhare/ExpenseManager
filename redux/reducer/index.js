import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";

let reducer = combineReducers({
  categoryReducer: CategoryReducer,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
