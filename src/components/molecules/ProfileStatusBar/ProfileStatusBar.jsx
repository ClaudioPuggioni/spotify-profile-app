import React from "react";
import ProfileStatusItem from "../ProfileStatusItem/ProfileStatusItem";
import "./styles.css";

export default function ProfileStatusBar({ numbers = "numbers are missing", labels = "labels are missing" }) {
  return (
    <div className="profileStatusBar">
      {numbers.length > 0
        ? numbers.map((ele, idx) => {
            return <ProfileStatusItem numberTop={numbers[idx]} textBottom={labels[idx]}></ProfileStatusItem>;
          })
        : numbers}
    </div>
  );
}
