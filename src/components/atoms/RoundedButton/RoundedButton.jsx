import React from "react";
import { SECONDARY, SPOTIFYWHITE } from "../../../styles/colors";
import "./styles.css";

export default function RoundedButton({ children = "No Text here!", isInline = false }) {
  return (
    <button className={isInline ? "inlineBtn" : "coloredBtn"} style={{ color: SPOTIFYWHITE, backgroundColor: isInline ? "transparent" : SECONDARY }}>
      {children}
    </button>
  );
}
