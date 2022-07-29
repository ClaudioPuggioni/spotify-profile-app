import React from "react";
import { SECONDARY, SPOTIFYWHITE } from "../../../styles/colors";
import "./styles.css";

export default function RoundedButton({
  style = {},
  children = "No Text here!",
  isInline = false,
  onClick = ()=>{console.error('No action sent! - RBA')}
}) {
  return (
    <button
      className={isInline ? "inlineBtn" : "coloredBtn"}
      style={{
        color: SPOTIFYWHITE,
        backgroundColor: isInline ? "transparent" : SECONDARY,
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
