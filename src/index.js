import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
