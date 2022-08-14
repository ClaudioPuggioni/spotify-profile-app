import { SPOTIFYWHITE } from "../../../styles/colors";
import ArtistsList from "../../molecules/ArtistsList/ArtistsList";
import HeaderButtonGroup from "../../molecules/HeaderButtonGroup/HeaderButtonGroup";
import TracksList from "../../molecules/TracksList/TracksList";
import ProfileHeader from "../../organisms/ProfileHeader/ProfileHeader";
import "./styles.css";

export default function Profile({
  imageSrc = false,
  username = "Dummyuser -PHO",
  profileStatusArr = [],
  artistsArr = [],
  tracksArr = [],
  imgStyle = [],
  listStyle = [],
  itemStyle = [],
  onClick = () => {
    console.error("No action sent! - PT");
  },
}) {
  return (
    <div id="profileContainer">
      <div id="headerProfile">
        <ProfileHeader imageSrc={imageSrc} username={username} profileStatusArr={profileStatusArr} onClick={onClick} />
      </div>
      <div id="footerProfile">
        <div id="topArtistsDiv">
          <HeaderButtonGroup headerText="Top Artists of All Time" buttonText="see more" isButtonInline orient="row" labelStyle={{ color: SPOTIFYWHITE, fontSize: "14px" }} buttonStyle={{ borderRadius: "16%/50%", padding: "8.8px 20px", border: "1px solid #c0c0c0" }} />
          <ArtistsList artistsArr={artistsArr} itemType={"row"} listStyle={listStyle} itemStyle={itemStyle} imgStyle={imgStyle} />
        </div>
        <div id="topTracksDiv">
          <HeaderButtonGroup headerText="Top Tracks of All Time" buttonText="see more" isButtonInline orient="row" labelStyle={{ color: SPOTIFYWHITE, fontSize: "14px" }} buttonStyle={{ borderRadius: "16%/50%", padding: "8.8px 20px", border: "1px solid #c0c0c0" }} />
          <TracksList tracksArr={tracksArr} imgStyle={imgStyle} />
        </div>
      </div>
    </div>
  );
}
