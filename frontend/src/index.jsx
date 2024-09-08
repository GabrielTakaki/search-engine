import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./GlobalStyles";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
