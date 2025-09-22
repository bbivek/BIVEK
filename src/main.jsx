import React from "react";          // optional if JSX transform works
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles/App.css";               // make sure this file exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
