import AppLabel, { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
import RoundedButton from "../../atoms/RoundedButton/RoundedButton";
import ProfileStatusBar from "../../molecules/ProfileStatusBar/ProfileStatusBar";
import Image, { TYPES as IMAGETYPES } from "../../atoms/Image/Image";
import "./styles.css";
import { SPOTIFYWHITE } from "../../../styles/colors";

export default function ProfileHeader({
  imageSrc = false,
  username = "Dummyuser -PHO",
  profileStatusArr = [],
  onClick = () => {
    console.error("No action sent! - PHO");
  },
  style = {},
}) {
  return (
    <div className="profileHeader">
      <div id="profileHeaderImage">
        <Image imageSrc={imageSrc} imageName="profileIcon.svg" isRounded type={!imageSrc ? IMAGETYPES.SMALLMINI : IMAGETYPES.MED} imgStyle={{ filter: !imageSrc ? `invert(100%)` : "", borderRadius: "50%", border: !imageSrc ? "" : "2px solid white" }} />
      </div>
      <div id="profileHeaderLabel">
        <AppLabel style={{ color: SPOTIFYWHITE, fontSize: "38.5px" }} type={LABELTYPES.TITLE} isBold>
          {username}
        </AppLabel>
      </div>
      <div id="profileHeaderBar">
        <ProfileStatusBar profileStatusArr={profileStatusArr} />
      </div>
      <div id="profileHeaderButton">
        <RoundedButton isInline onClick={onClick}>
          logout
        </RoundedButton>
      </div>
    </div>
  );
}
