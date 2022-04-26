import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import GetInventaryReducer from "./Reducers/GetInventaryReducer";

const Store = createStore(GetInventaryReducer);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
