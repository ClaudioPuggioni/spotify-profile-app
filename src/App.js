import "./App.css";
import React from "react";
import "./App.css";
import { TYPES } from "./components/atoms/AppLabel/AppLabel";
import ProfileStatusBar from "./components/molecules/ProfileStatusBar/ProfileStatusBar";
import ArtistItem from "./components/molecules/ArtistItem/ArtistItem";
import FilterTab from "./components/molecules/FilterTab/FilterTab";
import TrackItem from "./components/molecules/TrackItem/TrackItem";
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
      {/* <ToolbarTab text="Profile"/> */}
      {/* <ProfileStatusItem numberTop="0" textBottom="Followers" /> */}
      {/* <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} /> */}
      {/* <ArtistItem src="jimiHendrix.jpg" itemType="col">
        Jimi Hendrix
      </ArtistItem> */}
      {/* <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} />*/}
      {/* <FilterTab selected text="Last 6 Months" /> */}
      {/* <TrackItem src="logicBomb-Unlimited.png" trackName="High Density" artistName="Logic Bomb" albumName="Unlimited" songLength="8:01" /> */}
    </div>
  );
}

export default App;
