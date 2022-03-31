import { createStore } from "redux";
import reducer from "./reducer/index";

export default function configureStore(initialState) {
  return createStore(reducer, initialState);
}
