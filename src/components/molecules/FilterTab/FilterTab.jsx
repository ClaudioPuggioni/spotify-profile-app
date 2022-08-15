import React from "react";
import "./styles.css";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SPOTIFYWHITE, GREY } from "../../../styles/colors";

export default function FilterTab({ selected = false, text = "No text here - FTM", onClick = () => {} }) {
  const selectedStr = selected ? "selectedFilterTab" : "";
  return (
    <div style={selected ? { borderColor: SPOTIFYWHITE } : {}} className={`filter-tab-cont ${selectedStr}`}>
      <AppLabel style={selected ? { color: SPOTIFYWHITE, fontSize: "12px" } : { color: GREY, fontSize: "12px" }} onClick={onClick} isBold type>
        {text}
      </AppLabel>
    </div>
  );
}
