import "./App.css";
import React from "react";
import "./App.css";
import HeaderButtonGroup from "./components/molecules/HeaderButtonGroup/HeaderButtonGroup";
import { TYPES } from "./components/atoms/AppLabel/AppLabel";
import ProfileStatusItem from "./components/molecules/ProfileStatusItem/ProfileStatusItem";
import ProfileStatusBar from "./components/molecules/ProfileStatusBar/ProfileStatusBar";
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
      {/* <ProfileStatusItem numberTop="0" textBottom="Followers" /> */}
      <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} />
    </div>
  );
}

export default App;
