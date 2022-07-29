import "./App.css";
import React from "react";
import "./App.css";
import HeaderButtonGroup from "./components/molecules/HeaderButtonGroup/HeaderButtonGroup";
import { TYPES } from "./components/atoms/AppLabel/AppLabel";
function App() {
  return (
    <div className="App">
      {/* <AppLabel type={TYPES.PAR} isBold>Hello Claudio</AppLabel> */}
      {/* <RoundedButton>Log in to spotify</RoundedButton> */}
      {/* <RoundedButton isInline>Logout</RoundedButton> */}
      {/* <RoundedButton isInline>See more</RoundedButton> */}
      {/* <Image /> */}
      <HeaderButtonGroup
        buttonText="See More"
        headerText="Hello"
        type={TYPES.SUB_TITLE} 
        isButtonInline
      />
    </div>
  );
}

export default App;
