import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
// React.Strictmode = fitur tambahan yang membantu mengidentifikasi dan mengatasi masalah potensial agar aplikasi lebih stabil dan mengikuti praktik terbaik.
  <React.StrictMode>
      <App />
  </React.StrictMode>
);