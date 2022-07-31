import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import "./styles.css";
// import HeaderButtonGroup from "../../molecules/HeaderButtonGroup/HeaderButtonGroup";
// import { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
// import { SPOTIFYWHITE } from "../../../styles/colors";

export default function Recent() {
  return (
    <div id="recentContainer">
      <AppLabel type={TYPES.SUB_TITLE} style isBold>
        Recently Played Tracks
      </AppLabel>
    </div>
  );
}
