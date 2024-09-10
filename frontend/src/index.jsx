import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./GlobalStyles";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

dayjs.extend(utc);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
