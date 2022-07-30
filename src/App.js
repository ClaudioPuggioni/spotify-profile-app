import "./App.css";
import React from "react";
import "./App.css";
import { TYPES } from "./components/atoms/AppLabel/AppLabel";
import ProfileStatusBar from "./components/molecules/ProfileStatusBar/ProfileStatusBar";
import ArtistItem from "./components/molecules/ArtistItem/ArtistItem";
import FilterTab from "./components/molecules/FilterTab/FilterTab";
import TrackItem from "./components/molecules/TrackItem/TrackItem";
import ToolbarTab from "./components/molecules/ToolbarTab/ToolbarTab";
import Toolbar from "./components/molecules/ToolBar/Toolbar";

const toolbarData = [
  { fileNameExt: "profileIcon.svg", name: "profile" },
  { fileNameExt: "topArtistsIcon.svg", name: "top artists" },
  { fileNameExt: "topTracksIcon.svg", name: "top tracks" },
  { fileNameExt: "recentIcon.svg", name: "recent" },
  { fileNameExt: "playlistsIcon.svg", name: "playlists" },
];

function App() {
  return (
    <div className="App">
      {/* <AppLabel type={TYPES.PAR} isBold>Hello Claudio</AppLabel> */}
      {/* <RoundedButton>Log in to spotify</RoundedButton> */}
      {/* <RoundedButton isInline>Logout</RoundedButton> */}
      {/* <RoundedButton isInline>See more</RoundedButton> */}
      {/* <Image /> */}
      {/* <HeaderButtonGroup
        buttonText="See More"
        headerText="Hello"
        type={TYPES.SUB_TITLE} 
        isButtonInline
      /> */}
      {/* <ToolbarTab text="Profile" imageName="user.png" /> */}
      {/* <ProfileStatusItem numberTop="0" textBottom="Followers" /> */}
      {/* <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} /> */}
      {/* <ArtistItem src="jimiHendrix.jpg" itemType="col">
        Jimi Hendrix
      </ArtistItem> */}
      {/* <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} />*/}
      {/* <FilterTab selected text="Last 6 Months" /> */}
      {/* <TrackItem src="logicBomb-Unlimited.png" trackName="Neighbour Of The Beast" artistName="Logic Bomb" albumName="Unlimited" songLength="7:13" /> */}
      <Toolbar tabsArr={toolbarData} selected="playlists" />
    </div>
  );
}

export default App;
