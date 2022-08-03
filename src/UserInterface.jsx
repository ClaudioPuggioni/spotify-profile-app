import "./styles.css";
import { PRIMARY } from "./styles/colors";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import MainToolbar from "./components/organisms/MainToolBar/MainToolbar";

import {useSelector} from 'react-redux'

function UserInterface() {
  const {auth} = useSelector(state=>state.apiRedux);
  const { toolbarInputs } = useSelector((state) => state.dataLocker);
  return (
    <div id="userInterface" style={{ backgroundColor: PRIMARY }}>
      {auth ? (
        <MainToolbar tabsArr={toolbarInputs} selected="profile" fixed />
      ) : null}
      <Outlet />
    </div>
  );
}

export default UserInterface;
