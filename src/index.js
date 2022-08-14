import "./index.css";
import ReactDOM from "react-dom/client";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserInterface from "./UserInterface";
import { Provider } from "react-redux";
import Login from "./components/templates/Login/Login";
import Test from "./components/templates/Test/Test";
import Validate from "./pages/Validate/Validate";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import TopArtistsPage from "./components/pages/TopArtistsPage/TopArtistsPage";
import TopTracksPage from "./components/pages/TopTracksPage/TopTracksPage";
import RecentPage from "./components/pages/RecentPage/RecentPage";
import PlaylistsPage from "./components/pages/PlaylistsPage/PlaylistsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<UserInterface />}>
          <Route index element={<Validate />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="topartists" element={<TopArtistsPage />} />
          <Route path="toptracks" element={<TopTracksPage />} />
          <Route path="recent" element={<RecentPage />} />
          <Route path="playlists" element={<PlaylistsPage />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Provider>
  </Router>
);
