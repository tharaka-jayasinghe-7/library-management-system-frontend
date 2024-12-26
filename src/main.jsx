import React from "react";
import ReactDOM from "react-dom/client"; // Correct import
import { BrowserRouter } from "react-router-dom"; // Make sure this is imported
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
