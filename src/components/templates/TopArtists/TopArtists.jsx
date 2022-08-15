import ArtistsList from "../../molecules/ArtistsList/ArtistsList";
import FilterBar from "../../molecules/FilterBar/FilterBar";
import "./styles.css";

export default function TopArtists({ artistsArr = [], filterBarArr = ["All Time", "Last 6 Months", "Last 4 Weeks"], col = false, onClick = () => {}, selected = 0, imgStyle = [] }) {
  return (
    <div id="topArtistsContainer">
      <div id="topArtistsDiv">
        <div id="topArtistsHeader">
          <FilterBar filterBarArr={filterBarArr} selected={selected} col={col} onClick={onClick}>
            Top Artists
          </FilterBar>
        </div>
        <div id="topArtistsBody">
          <ArtistsList artistsArr={artistsArr} itemType="col" listStyle={{ gap: "14.1px", rowGap: "22px" }} imgStyle={imgStyle} />
        </div>
      </div>
    </div>
  );
}
