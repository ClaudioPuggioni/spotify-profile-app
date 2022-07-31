import "./styles.css";
import FilterBar from "../../molecules/FilterBar/FilterBar";
import TracksList from "../../molecules/TracksList/TracksList";

const filterBarArr = ["All Time", "Last 6 Months", "Last 4 Weeks"];

const tracksArr = [
  { imageNameExt: "logicBomb-unlimited.png", trackName: "Neighbour Of The Beast", artistName: "Logic Bomb", albumName: "Unlimited", songLength: "7:13" },
  { imageNameExt: "macAyres-driveSlow.jpg", trackName: "Easy", artistName: "Mac Ayres", albumName: "Drive Slow", songLength: "5:14" },
  { imageNameExt: "fridayNightPlans-plasticLove.jpg", trackName: "Plastic Love", artistName: "Friday Night Plans", albumName: "Plastic Love", songLength: "4:36" },
];

export default function TopTracks() {
  return (
    <div id="topTracksContainer">
      <div id="topTracksDiv">
        <div id="topTracksHeader">
          <FilterBar filterBarArr={filterBarArr} selected={0}>
            Top Tracks
          </FilterBar>
        </div>
        <div id="topTracksBody">
          <TracksList tracksArr={tracksArr} />
        </div>
      </div>
    </div>
  );
}
