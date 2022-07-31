import "./styles.css";
import AppLabel, { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
import PlaylistItem from "../../molecules/PlaylistItem/PlaylistItem";
import { SPOTIFYWHITE } from "../../../styles/colors";

const playlistsArr = [
  { imageNameExt: "playlist1.webp", playlistTitle: "EDM Anytime", trackCount: 0 },
  { imageNameExt: "playlist2.jpg", playlistTitle: "Evening Chillout", trackCount: 0 },
  { imageNameExt: "playlist3.jpg", playlistTitle: "Club Cyberpunk", trackCount: 0 },
];

export default function Playlists() {
  return (
    <div id="playlistsContainer">
      <div id="playlistDiv">
        <div id="playlistsHeader">
          <AppLabel style={{ color: SPOTIFYWHITE }} type={LABELTYPES.SUB_SUB_TITLE} isBold>
            Your Playlists
          </AppLabel>
        </div>
        <div id="playlistsBody">{playlistsArr.length > 0 ? playlistsArr.map((ele) => <PlaylistItem imageNameExt={ele.imageNameExt} playlistTitle={ele.playlistTitle} trackCount={ele.trackCount} />) : null}</div>
      </div>
    </div>
  );
}
