import "./styles.css";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SPOTIFYWHITE } from "../../../styles/colors";
import TracksList from "../../molecules/TracksList/TracksList";

export default function Recent({ tracksArr = [], imgStyle = [] }) {
  return (
    <div id="recentContainer">
      <div id="recentDiv">
        <div id="recentHeader">
          <AppLabel type={TYPES.SUB_SUB_TITLE} style={{ color: SPOTIFYWHITE }} isBold>
            Recently Played Tracks
          </AppLabel>
        </div>
        <TracksList tracksArr={tracksArr} imgStyle={imgStyle} />
      </div>
    </div>
  );
}
