import React from "react";
import { SPOTIFYWHITE } from "../../../styles/colors";
import AppLabel from "../../atoms/AppLabel/AppLabel";
import FilterTab from "../FilterTab/FilterTab";
import "./styles.css";

export default function FilterBar({ filterBarArr = [], selected = 0, children = "no text here - FBM", onClick = () => {} }) {
  return (
    <div className="filterBarContainer">
      <AppLabel style={{ fontSize: "19px", color: SPOTIFYWHITE }} type isBold>
        {children}
      </AppLabel>
      <div className="filterBarTabs">{filterBarArr.length > 0 ? filterBarArr.map((ele, idx) => <FilterTab key={`FilterTab${idx}`} selected={selected === idx ? true : false} text={ele} onClick={onClick} />) : null}</div>
    </div>
  );
}
