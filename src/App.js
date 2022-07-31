import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { TYPES } from "./components/atoms/AppLabel/AppLabel";
import ProfileStatusBar from "./components/molecules/ProfileStatusBar/ProfileStatusBar";
import ArtistItem from "./components/molecules/ArtistItem/ArtistItem";
import FilterTab from "./components/molecules/FilterTab/FilterTab";
import TrackItem from "./components/molecules/TrackItem/TrackItem";
import ToolbarTab from "./components/molecules/ToolbarTab/ToolbarTab";
import MainToolbar from "./components/organisms/MainToolBar/MainToolbar";
import HeaderButtonGroup from "./components/molecules/HeaderButtonGroup/HeaderButtonGroup";
import { SPOTIFYWHITE } from "./styles/colors";

function App() {
  return (
    <Provider store={store}>
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
        {/* <HeaderButtonGroup buttonText="Log in to spotify" headerText="Spotify Profile" type={TYPES.SUB_SUB_TITLE} orient="col" labelStyle={{ color: SPOTIFYWHITE, fontSize: "14px" }} buttonStyle={{ fontSize: "7px", padding: "8px 14px", borderRadius: "12%/47%", letterSpacing: "1.2px" }} /> */}
        {/* <ToolbarTab text="Profile" imageName="user.png" /> */}
        {/* <ProfileStatusItem numberTop="0" textBottom="Followers" /> */}
        {/* <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} /> */}
        {/* <ArtistItem src="jimiHendrix.jpg" itemType="col">
        Jimi Hendrix
      </ArtistItem> */}
        {/* <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} />*/}
        {/* <FilterTab selected text="Last 6 Months" /> */}
        {/* <TrackItem src="logicBomb-Unlimited.png" trackName="Neighbour Of The Beast" artistName="Logic Bomb" albumName="Unlimited" songLength="7:13" /> */}
        {/* <MainToolbar tabsArr={toolbarData} selected="top tracks" /> */}
      </div>
    </Provider>
  );
}

export default App;
