import React from "react";
import "./styles.css";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import { SPOTIFYBLACK } from "../../../styles/colors";
import ToolbarTab from "../../molecules/ToolbarTab/ToolbarTab";

export default function MainToolbar({ tabsArr = "tab array is missing - TTM", selected = "", fixed = false }) {
  return (
    <div className="fullPaneToolbar" style={{ backgroundColor: SPOTIFYBLACK, position: fixed ? "fixed" : "" }}>
      <Image imageName="spotifyIcon.svg" type={IMAGE_TYPES.EXTRAEXTRA_SMALL} style={{ filter: "invert(54%) sepia(58%) saturate(1865%) hue-rotate(99deg) brightness(95%) contrast(78%)" }} />
      <div className="toolbar">{tabsArr.length > 0 ? tabsArr.map((ele) => <ToolbarTab imageName={ele.fileNameExt} text={ele.name} selected={selected === ele.name ? selected : ""}></ToolbarTab>) : tabsArr}</div>
      <Image imageName="githubIcon.svg" type={IMAGE_TYPES.ALMOSTTINY} style={{ filter: "invert(54%)" }} />
    </div>
  );
}
