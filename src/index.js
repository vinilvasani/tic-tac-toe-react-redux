import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Game from "./Game";

import { Provider } from "react-redux";
import configureStore from "./store/store";

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </StrictMode>,
  rootElement
);
