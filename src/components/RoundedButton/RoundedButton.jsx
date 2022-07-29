import React from "react";
import "./styles.css";

export default function RoundedButton({ children = "No Text here!", isInline = false }) {
  return <button className={isBordered ? "inlineBtn" : ""}>{children}</button>;
}
