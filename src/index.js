import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInterface from "./UserInterface";
import { Provider } from "react-redux";
import Login from "./components/templates/Login/Login";
import Test from "./components/templates/Test/Test";
import Profile from "./components/templates/Profile/Profile";
import Recent from "./components/templates/Recent/Recent";
import TopArtists from "./components/templates/TopArtists/TopArtists";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<UserInterface />}>
          <Route index element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="recent" element={<Recent />} />
          <Route path="topartists" element={<TopArtists />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Provider>
  </Router>
);
