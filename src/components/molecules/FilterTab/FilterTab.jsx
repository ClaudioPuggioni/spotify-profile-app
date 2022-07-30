import React from "react";
import "./styles.css";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SPOTIFYWHITE, GREY } from "../../../styles/colors";

export default function FilterTab({ selected = false, text = "No text here - FTM" }) {
  const selectedStr = selected ? "selectedFilterTab" : "";
  return (
    <div style={selected ? { borderColor: SPOTIFYWHITE } : {}} className={`filter-tab-cont ${selectedStr}`}>
      <AppLabel style={selected ? { color: SPOTIFYWHITE } : { color: GREY }} isBold type={TYPES.SUB_SUB_TITLE}>
        {text}
      </AppLabel>
    </div>
  );
}
