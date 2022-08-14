import "./styles.css";
import AppLabel, { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
import PlaylistItem from "../../molecules/PlaylistItem/PlaylistItem";
import { SPOTIFYWHITE } from "../../../styles/colors";

export default function Playlists({ playlistsArr = [], imgStyle = [] }) {
  return (
    <div id="playlistsContainer">
      <div id="playlistDiv">
        <div id="playlistsHeader">
          <AppLabel style={{ color: SPOTIFYWHITE }} type={LABELTYPES.SUB_SUB_TITLE} isBold>
            Your Playlists
          </AppLabel>
        </div>
        {console.log(playlistsArr)}
        <div id="playlistsBody">{playlistsArr.length > 0 ? playlistsArr.map((ele) => <PlaylistItem imageSrc={ele.imageSrc} imageNameExt={ele.imageNameExt} playlistTitle={ele.playlistTitle} trackCount={ele.trackCount} imgStyle={imgStyle} />) : null}</div>
      </div>
    </div>
  );
}
