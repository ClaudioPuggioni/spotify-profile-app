import "./App.css";
import React from "react";
import "./App.css";
import { TYPES } from "./components/atoms/AppLabel/AppLabel";
import ProfileStatusBar from "./components/molecules/ProfileStatusBar/ProfileStatusBar";
import FilterTab from "./components/molecules/FilterTab/FilterTab";
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
      {/* <ProfileStatusBar numbers={[0, 12, 13]} labels={["Followers", "Following", "Playlists"]} />*/}
      <FilterTab selected text="Last 6 Months"/>
    </div> 
  );
}

export default App;
