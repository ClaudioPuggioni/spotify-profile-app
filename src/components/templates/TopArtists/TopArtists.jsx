import ArtistsList from "../../molecules/ArtistsList/ArtistsList";
import FilterBar from "../../molecules/FilterBar/FilterBar";
import "./styles.css";

// const filterBarArr = ["All Time", "Last 6 Months", "Last 4 Weeks"];

// const artistsArr = [
//   {
//     imageNameExt: "logicBomb.webp",
//     artistName: "Logic Bomb",
//   },
//   {
//     imageNameExt: "logicBomb.webp",
//     artistName: "Logic Bomb",
//   },
//   {
//     imageNameExt: "macAyres.jpg",
//     artistName: "Mac Ayres",
//   },
//   {
//     imageNameExt: "fridayNightPlans.jpg",
//     artistName: "Friday Night Plans",
//   },
//   {
//     imageNameExt: "fridayNightPlans.jpg",
//     artistName: "Friday Night Plans",
//   },

//   {
//     imageNameExt: "logicBomb.webp",
//     artistName: "Logic Bomb",
//   },
//   {
//     imageNameExt: "logicBomb.webp",
//     artistName: "Logic Bomb",
//   },
// ];

export default function TopArtists({ artistsArr = [], filterBarArr = ["All Time", "Last 6 Months", "Last 4 Weeks"], imgStyle = [] }) {
  return (
    <div id="topArtistsContainer">
      <div id="topArtistsDiv">
        <div id="topArtistsHeader">
          <FilterBar filterBarArr={filterBarArr} selected={0}>
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
