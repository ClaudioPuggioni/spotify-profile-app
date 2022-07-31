import ArtistsList from "../../molecules/ArtistsList/ArtistsLists";
import TracksList from "../../molecules/TracksList/TracksList";
import "./styles.css";

const artistsArr = [
  {
    imageNameExt: "logicBomb.webp",
    artistName: "Logic Bomb",
  },
  {
    imageNameExt: "macAyres.jpg",
    artistName: "Mac Ayres",
  },
  {
    imageNameExt: "fridayNightPlans.jpg",
    artistName: "Friday Night Plans",
  },
];

const tracksArr = [
  { imageNameExt: "logicBomb-unlimited.png", trackName: "Neighbour Of The Beast", artistName: "Logic Bomb", albumName: "Unlimited", songLength: "7:13" },
  { imageNameExt: "macAyres-driveSlow.jpg", trackName: "Easy", artistName: "Mac Ayres", albumName: "Drive Slow", songLength: "5:14" },
  { imageNameExt: "fridayNightPlans-plasticLove.jpg", trackName: "Plastic Love", artistName: "Friday Night Plans", albumName: "Plastic Love", songLength: "4:36" },
];

export default function Test() {
  return (
    <div id="testContainer">
      <div id="headerProfile">
        <></>
      </div>
      <div id="footerProfile">
        <ArtistsList artistsArr={artistsArr} itemType={"row"} listStyle={[]} itemStyle={[]} />
        <TracksList tracksArr={tracksArr} />
      </div>
    </div>
  );
}
