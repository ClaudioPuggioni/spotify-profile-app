import React from "react";
import "./styles.css";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import { SPOTIFYBLACK } from "../../../styles/colors";
import ToolbarTab from "../../molecules/ToolbarTab/ToolbarTab";
import { useNavigate } from "react-router-dom";
import { setTab } from "../../../slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MainToolbar({ tabsArr = "tab array is missing - TTM", selected = "", fixed = false }) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { currTab } = useSelector((state) => state.dataLocker);
  return (
    <div className="fullPaneToolbar" style={{ backgroundColor: SPOTIFYBLACK, position: fixed ? "fixed" : "" }}>
      <Image imageName="spotifyIcon.svg" type={IMAGE_TYPES.ALMOSTEXTRA_SMALL} imgStyle={{ filter: "invert(54%) sepia(58%) saturate(1865%) hue-rotate(99deg) brightness(95%) contrast(78%)" }} onClick={() => window.location.replace("https://open.spotify.com/", "_blank")} />
      <div className="toolbar">
        {tabsArr.length > 0
          ? tabsArr.map((ele, idx) => (
              <ToolbarTab
                key={`ToolbarTab${idx}`}
                imageName={ele.fileNameExt}
                text={ele.name}
                selected={currTab === ele.linkName ? true : false}
                onClick={() => {
                  Navigate(`/${ele.linkName}`);
                  dispatch(setTab(ele.linkName));
                }}
              />
            ))
          : tabsArr}
      </div>
      <Image imageName="githubIcon.svg" type={IMAGE_TYPES.EXTRAEXTRA_SMALL} imgStyle={{ filter: "invert(54%)" }} onClick={() => window.location.replace("https://github.com/", "_blank")} />
    </div>
  );
}
