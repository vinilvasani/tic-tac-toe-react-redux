import { createStore } from "redux";
import reducer from "./square";

//Need a reducer to create the store

export default function () {
  const store = createStore(reducer);
  return store;
}
