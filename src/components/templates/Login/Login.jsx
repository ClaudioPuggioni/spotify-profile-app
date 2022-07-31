import "./styles.css";
import HeaderButtonGroup from "../../molecules/HeaderButtonGroup/HeaderButtonGroup";
import { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
import { SPOTIFYWHITE } from "../../../styles/colors";

export default function Login() {
  return (
    <div id="loginContainer">
      <HeaderButtonGroup buttonText="Log in to spotify" headerText="Spotify Profile" type={LABELTYPES.SUB_SUB_TITLE} orient="col" labelStyle={{ color: SPOTIFYWHITE, fontSize: "14px" }} buttonStyle={{ fontSize: "7px", padding: "8px 14px", borderRadius: "12%/47%", letterSpacing: "1.2px" }} />;
    </div>
  );
}
