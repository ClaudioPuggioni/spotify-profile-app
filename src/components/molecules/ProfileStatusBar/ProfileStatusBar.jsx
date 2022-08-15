import React from "react";
import ProfileStatusItem from "../ProfileStatusItem/ProfileStatusItem";
import "./styles.css";

export default function ProfileStatusBar({ profileStatusArr = "profileStatusArr is missing - PSBM" }) {
  return (
    <div className="profileStatusBar">
      {profileStatusArr.length > 0
        ? profileStatusArr.map((ele, idx) => {
            return <ProfileStatusItem key={`ProfileStatusItem${idx}`} numberTop={ele.number} textBottom={ele.label} />;
          })
        : profileStatusArr}
    </div>
  );
}
