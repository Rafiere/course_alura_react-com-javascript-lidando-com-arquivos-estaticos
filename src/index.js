import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* Estamos importando as fontes para que a utilização delas seja possível no projeto. */
import "./assets/fonts/GandhiSans-Regular.otf";
import "./assets/fonts/GandhiSans-Bold.otf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
