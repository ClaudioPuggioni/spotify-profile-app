import "./styles.css";
import FilterBar from "../../molecules/FilterBar/FilterBar";
import TracksList from "../../molecules/TracksList/TracksList";

export default function TopTracks({ tracksArr = [], filterBarArr = ["All Time", "Last 6 Months", "Last 4 Weeks"], imgStyle = [] }) {
  return (
    <div id="topTracksContainer">
      <div id="topTracksDiv">
        <div id="topTracksHeader">
          <FilterBar filterBarArr={filterBarArr} selected={0}>
            Top Tracks
          </FilterBar>
        </div>
        <div id="topTracksBody">
          <TracksList tracksArr={tracksArr} imgStyle={imgStyle} />
        </div>
      </div>
    </div>
  );
}
