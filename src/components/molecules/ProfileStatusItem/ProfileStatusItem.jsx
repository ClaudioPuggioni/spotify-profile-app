import React from "react";
import "./styles.css";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SECONDARY, GREY } from "../../../styles/colors";

export default function ProfileStatusItem({ numberTop = "No number here! - HBM", textBottom = "No text here! - HBM" }) {
  return (
    <div className="profileStatusItem">
      <AppLabel style={{ color: SECONDARY, fontSize: "14px", fontWeight: "700" }} type={TYPES.SUB_TITLE}>
        {numberTop}
      </AppLabel>
      <AppLabel style={{ color: GREY, textTransform: "uppercase", fontSize: "9.7px", letterSpacing: "0.6px", fontWeight: "700" }} type={TYPES.SUB_SUB_TITLE}>
        {textBottom}
      </AppLabel>
    </div>
  );
}
