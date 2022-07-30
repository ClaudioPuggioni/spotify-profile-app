import React from "react";
import "./styles.css";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SECONDARY, PRIMARY, SPOTIFYBLACK, SPOTIFYWHITE, GREY } from "../../../styles/colors";
import ToolbarTab from "../ToolbarTab/ToolbarTab";

// export default function dasd({
//   selected = false,
//   imageName = "No image",
//   text = "No text here - TTM",
// }) {
//   const imageArr = imageName.split(".");
//   const selectedStr = selected ? "selected" : "";
//   const image = imageArr[0] + selectedStr + "." + imageArr[1];
//   return (
//     <div
//       style={
//         selected
//           ? { backgroundColor: PRIMARY, borderColor: SECONDARY }
//           : { backgroundColor: SPOTIFYBLACK }
//       }
//       className={`toolbar-tab-cont ${selectedStr}`}
//     >
//       <Image imageName={image} type={IMAGE_TYPES.EXTRA_SMALL} />
//       <AppLabel
//         style={selected ? { color: SPOTIFYWHITE } : { color: GREY }}
//         isBold
//         type={TYPES.PAR}
//       >
//         {text}
//       </AppLabel>
//     </div>
//   );
// }

export default function Toolbar({ tabsArr = "tab array is missing - TTM", selected = "" }) {
  return <div className="toolbar">{tabsArr.length > 0 ? tabsArr.map((ele) => <ToolbarTab imageName={ele.fileNameExt} text={ele.name} selected={selected === ele.name ? selected : ""}></ToolbarTab>) : tabsArr}</div>;
}
