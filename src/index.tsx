import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Application } from "./components/Application";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Application />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
