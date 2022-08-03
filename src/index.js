import "./index.css";
import ReactDOM from "react-dom/client";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInterface from "./UserInterface";
import { Provider } from "react-redux";
import Login from "./components/templates/Login/Login";
import Test from "./components/templates/Test/Test";
import Profile from "./components/templates/Profile/Profile";
import Recent from "./components/templates/Recent/Recent";
import TopArtists from "./components/templates/TopArtists/TopArtists";
import TopTracks from "./components/templates/TopTracks/TopTracks";
import Playlists from "./components/templates/Playlists/Playlists";
import Validate from "./pages/Validate/Validate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<UserInterface />}>
          <Route index element={<Validate />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="topartists" element={<TopArtists />} />
          <Route path="toptracks" element={<TopTracks />} />
          <Route path="recent" element={<Recent />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Provider>
  </Router>
);
