import "./styles.css";
import HeaderButtonGroup from "../../molecules/HeaderButtonGroup/HeaderButtonGroup";
import { TYPES as LABELTYPES } from "../../atoms/AppLabel/AppLabel";
import { SPOTIFYWHITE } from "../../../styles/colors";
import { getAuthLink } from "../../../utils/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Login() {
  const { auth } = useSelector((state) => state.apiRedux);
  const navigator = useNavigate();
  useEffect(() => {
    if (auth) {
      // dispatch(setLoading(true));
      navigator("/");
    }
  });

  return (
    <div id="loginContainer">
      <HeaderButtonGroup
        buttonText="Log in to spotify"
        headerText="Spotify Profile"
        type={LABELTYPES.SUB_SUB_TITLE}
        orient="col"
        labelStyle={{ color: SPOTIFYWHITE, fontSize: "24px" }}
        buttonStyle={{
          fontSize: "12px",
          padding: "13.5px 28px",
          borderRadius: "11%/47%",
          letterSpacing: "2.1px",
        }}
        onClick={() => (window.location.href = `${getAuthLink()}`)}
      />
      ;
    </div>
  );
}
