import "./styles.css";
import HeaderButtonGroup from "../../molecules/HeaderButtonGroup/HeaderButtonGroup";
import { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
import { SPOTIFYWHITE } from "../../../styles/colors";
import { useOutletContext } from "react-router-dom";

export default function Login() {
  const [handleGetAuth] = useOutletContext();

  return (
    <div id="loginContainer">
      <HeaderButtonGroup buttonText="Log in to spotify" headerText="Spotify Profile" type={LABELTYPES.SUB_SUB_TITLE} orient="col" labelStyle={{ color: SPOTIFYWHITE, fontSize: "24px" }} buttonStyle={{ fontSize: "12px", padding: "13.5px 28px", borderRadius: "11%/47%", letterSpacing: "2.1px" }} onClick={() => handleGetAuth()} />;
    </div>
  );
}
