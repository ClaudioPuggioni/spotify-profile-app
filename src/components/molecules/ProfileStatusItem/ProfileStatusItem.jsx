import React from "react";
import "./styles.css";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SECONDARY, GREY } from "../../../styles/colors";

export default function ProfileStatusItem({ numberTop = "No number here! - HBM", textBottom = "No text here! - HBM" }) {
  return (
    <div className="profileStatusItem">
      <AppLabel style={{ color: SECONDARY, fontSize: "15.5px", fontWeight: "700" }} type={TYPES.SUB_TITLE}>
        {numberTop}
      </AppLabel>
      <AppLabel style={{ color: GREY, textTransform: "uppercase", fontSize: "12px", letterSpacing: "0.7px" }} type={TYPES.SUB_SUB_TITLE} isBold>
        {textBottom}
      </AppLabel>
    </div>
  );
}
