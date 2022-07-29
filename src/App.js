import "./App.css";
import React from "react";
import "./App.css";
import Image, {TYPES} from "./components/atoms/Image/Image";
import HeaderButtonGroup from "./components/molecules/HeaderButtonGroup/HeaderButtonGroup";
import ToolbarTab from "./components/molecules/ToolbarTab/ToolbarTab";
function App() {
  return (
    <div className="App">
      {/* <AppLabel type={TYPES.PAR} isBold>Hello Claudio</AppLabel> */}
      {/* <RoundedButton>Log in to spotify</RoundedButton> */}
      {/* <RoundedButton isInline>Logout</RoundedButton> */}
      {/* <RoundedButton isInline>See more</RoundedButton> */}
      {/* <HeaderButtonGroup
        buttonText="See More"
        headerText="Hello"
        type={TYPES.SUB_TITLE} 
        isButtonInline
      /> */}
      <ToolbarTab text="Profile"/>
    </div>
  );
}

export default App;
