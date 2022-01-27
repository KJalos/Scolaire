import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MenuContextProvider } from "./store/menu-context";

ReactDOM.render(
  <BrowserRouter>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
