import React from "react";
import "./styles.css";

export const TYPES = {
  TITLE: 1,
  SUB_TITLE: 2,
  SUB_SUB_TITLE: 3,
  PAR: 4,
};

export default function AppLabel({ style={},children = "No Text here!", type = TYPES.TITLE, isBold = false }) {
  let result = {};
  switch (type) {
    case TYPES.TITLE:
      result = <h1 style={{...style}} className={isBold ? "bold-text" : ""}>{children}</h1>;
      break;
    case TYPES.SUB_TITLE:
      result = <h2 style={{...style}} className={isBold ? "bold-text" : ""}>{children}</h2>;
      break;
    case TYPES.SUB_SUB_TITLE:
      result = <h3 style={{...style}} className={isBold ? "bold-text" : ""}>{children}</h3>;
      break;
    default:
      result = <p style={{...style}} className={isBold ? "bold-text" : ""}>{children}</p>;
      break;
  }

  return result;
}
