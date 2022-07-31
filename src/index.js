import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInterface from "./UserInterface";
import { Provider } from "react-redux";
import Login from "./components/templates/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<UserInterface />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Provider>
  </Router>
);
