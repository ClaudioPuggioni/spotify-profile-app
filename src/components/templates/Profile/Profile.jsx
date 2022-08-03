
import { SPOTIFYWHITE } from "../../../styles/colors";
import ArtistsList from "../../molecules/ArtistsList/ArtistsLists";
import HeaderButtonGroup from "../../molecules/HeaderButtonGroup/HeaderButtonGroup";
import TracksList from "../../molecules/TracksList/TracksList";
import ProfileHeader from "../../organisms/ProfileHeader/ProfileHeader";
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

const profileStatusArr = [
  { number: 0, label: "Followers" },
  { number: 12, label: "Following" },
  { number: 3, label: "Playlists" },
];

export default function Profile() {
  return (
    <div id="profileContainer">
      <div id="headerProfile">
        <ProfileHeader profileStatusArr={profileStatusArr} />
      </div>
      <div id="footerProfile">
        <div id="topArtistsDiv">
          <HeaderButtonGroup headerText="Top Artists of All Time" buttonText="see more" isButtonInline orient="row" labelStyle={{ color: SPOTIFYWHITE, fontSize: "14px" }} buttonStyle={{ borderRadius: "16%/50%", padding: "8.8px 20px", border: "1px solid #c0c0c0" }} />
          <ArtistsList artistsArr={artistsArr} itemType={"row"} listStyle={[]} itemStyle={[]} />
        </div>
        <div id="topTracksDiv">
          <HeaderButtonGroup headerText="Top Tracks of All Time" buttonText="see more" isButtonInline orient="row" labelStyle={{ color: SPOTIFYWHITE, fontSize: "14px" }} buttonStyle={{ borderRadius: "16%/50%", padding: "8.8px 20px", border: "1px solid #c0c0c0" }} />
          <TracksList tracksArr={tracksArr} />
        </div>
      </div>
    </div>
  );
}
