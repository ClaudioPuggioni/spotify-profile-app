import "./styles.css";
import AppLabel, { TYPES } from "../../atoms/AppLabel/AppLabel";
import { SPOTIFYWHITE } from "../../../styles/colors";
import TracksList from "../../molecules/TracksList/TracksList";

const tracksArr = [
  { imageNameExt: "logicBomb-unlimited.png", trackName: "Neighbour Of The Beast", artistName: "Logic Bomb", albumName: "Unlimited", songLength: "7:13" },
  { imageNameExt: "macAyres-driveSlow.jpg", trackName: "Easy", artistName: "Mac Ayres", albumName: "Drive Slow", songLength: "5:14" },
  { imageNameExt: "fridayNightPlans-plasticLove.jpg", trackName: "Plastic Love", artistName: "Friday Night Plans", albumName: "Plastic Love", songLength: "4:36" },
];

export default function Recent() {
  return (
    <div id="recentContainer">
      <div id="recentDiv">
        <AppLabel type={TYPES.SUB_SUB_TITLE} style={{ color: SPOTIFYWHITE }} isBold>
          Recently Played Tracks
        </AppLabel>
        <TracksList tracksArr={tracksArr} />
      </div>
    </div>
  );
}
