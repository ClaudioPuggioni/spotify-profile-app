import React from "react";
import "./styles.css";
import RoundedButton from "../../atoms/RoundedButton/RoundedButton";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";

export default function HeaderButtonGroup({
  buttonText = "No text here! - HBM",
  headerText = "No text here! - HBM",
  isButtonInline = false,
  isBold = true,
  type = TYPES.SUB_TITLE,
  orient = "row",
  labelStyle = {},
  buttonStyle = {},
  onClick = () => {
    console.error("No action sent! - HBM");
  },
}) {
  return (
    <div className={orient === "row" ? "header-button-cont row" : "header-button-cont col"}>
      <AppLabel style={{ ...labelStyle, flex: 1 }} type={type} isBold={isBold}>
        {headerText}
      </AppLabel>
      <RoundedButton isInline={isButtonInline} onClick={onClick} style={buttonStyle}>
        {buttonText}
      </RoundedButton>
    </div>
  );
}
