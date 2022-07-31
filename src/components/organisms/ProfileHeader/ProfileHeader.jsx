import AppLabel, { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
import RoundedButton from "../../atoms/RoundedButton/RoundedButton";
import ProfileStatusBar from "../../molecules/ProfileStatusBar/ProfileStatusBar";
import Image, { TYPES as IMAGETYPES } from "../../atoms/Image/Image";
import "./styles.css";
import { SPOTIFYWHITE } from "../../../styles/colors";

export default function ProfileHeader({ username = "Dummyuser -PHO", profileStatusArr = [], style = {} }) {
  return (
    <div className="profileHeader">
      <div id="profileHeaderImage">
        <Image imageName="profileIcon.svg" isRoundedDiv isBorderedDiv isProfile type={IMAGETYPES.SMALLMINI} style={{ filter: `invert(100%)` }} />
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
        <RoundedButton isInline>logout</RoundedButton>
      </div>
    </div>
  );
}
