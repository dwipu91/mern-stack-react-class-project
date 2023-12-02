import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import MsgProvider from "./providers/MsgProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MsgProvider>
      <App />
    </MsgProvider>
  </React.StrictMode>
);
