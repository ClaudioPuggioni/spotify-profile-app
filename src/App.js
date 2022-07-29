import "./App.css";
import AppLabel, { TYPES } from "./components/atoms/AppLabel/AppLabel";
import RoundedButton from "./components/atoms/RoundedButton/RoundedButton";
import React from "react";
import "./App.css";
import Image from "./components/atoms/Image/Image";
function App() {
  function api() {}

  return (
    <div className="App">
      {/* <AppLabel type={TYPES.PAR} isBold>Hello Claudio</AppLabel> */}
      {/* <RoundedButton>Log in to spotify</RoundedButton> */}
      {/* <RoundedButton isInline>Logout</RoundedButton> */}
      {/* <RoundedButton isInline>See more</RoundedButton> */}
      <Image />
    </div>
  );
}

export default App;
