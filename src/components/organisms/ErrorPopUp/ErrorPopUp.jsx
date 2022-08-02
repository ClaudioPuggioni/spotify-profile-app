import React from "react";
import AppLabel, { TYPES as APP_TYPES} from "../../atoms/AppLabel/AppLabel";
import Image, { TYPES } from "../../atoms/Image/Image";
import { useNavigate, useSearchParams } from "react-router-dom";
import './styles.css'
import { ERROR, PRIMARY, SPOTIFYWHITE } from "../../../styles/colors";

export default function ErrorPopUp({errorMessage, isLoading}) {
    const [searchParams] = useSearchParams();
    const navigator = useNavigate();
    const message = searchParams.get('message')
  return (
    <div className="alert-cont" style={{backgroundColor: PRIMARY}}>
      {errorMessage!==""?<div className="alert-popup" style={{backgroundColor: ERROR}}>
        <div className="alert-header">
          <AppLabel style={{color: SPOTIFYWHITE, flex: 1}} isBold type={APP_TYPES.SUB_TITLE}>Error!</AppLabel>
          <Image type={TYPES.EXTRAEXTRA_SMALL} imageName="cross.png"  onClick={() => navigator('/')}></Image>
        </div>
        <hr />
        <AppLabel style={{color: SPOTIFYWHITE, flex: 1}} type={APP_TYPES.SUB_SUB_TITLE}>{message}</AppLabel>
      </div>:
      isLoading ? <AppLabel>Loading...</AppLabel> :""}
    </div>
  );
}
