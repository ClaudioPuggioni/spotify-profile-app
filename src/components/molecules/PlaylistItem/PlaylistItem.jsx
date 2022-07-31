import "./styles.css";
import AppLabel from "../../atoms/AppLabel/AppLabel";
import Image, { TYPES as IMAGE_TYPES } from "../../atoms/Image/Image";
import { GREY, SPOTIFYWHITE } from "../../../styles/colors";

export default function PlaylistItem({ imageNameExt = "No image src here! - PM", playlistTitle = "No playlist name here! - PM", trackCount = "No track count name here! - PM", itemStyle = {} }) {
  return (
    <div className="playlistItem" style={itemStyle}>
      <Image imageName={imageNameExt} type={IMAGE_TYPES.EXTRALARGE} />
      <div className="playlistMeta">
        <AppLabel style={{ color: SPOTIFYWHITE, fontSize: "13px", fontWeight: "500" }} type={"TYPES.SUB_SUB_TITLE"}>
          {playlistTitle}
        </AppLabel>
        <AppLabel style={{ color: GREY, fontSize: "9px", fontWeight: "700", letterSpacing: "1px" }} type={"TYPES.SUB_SUB_TITLE"}>
          {trackCount + " TRACKS"}
        </AppLabel>
      </div>
    </div>
  );
}
