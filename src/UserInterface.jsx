import "./styles.css";
import { PRIMARY } from "./styles/colors";
import { Outlet } from "react-router-dom";
import MainToolbar from "./components/organisms/MainToolBar/MainToolbar";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMobile } from "./slices/dataSlice";

function UserInterface() {
  const { auth } = useSelector((state) => state.apiRedux);
  const { toolbarInputs } = useSelector((state) => state.dataLocker);
  const isMobile = useMediaQuery({ query: "(max-width: 610px)" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMobile(isMobile));
    // eslint-disable-next-line
  }, [isMobile]);

  return (
    <div id="userInterface" style={{ backgroundColor: PRIMARY }}>
      {auth && !isMobile ? <MainToolbar tabsArr={toolbarInputs} selected="profile" fixed /> : null}
      <Outlet />
      {auth && isMobile ? <MainToolbar tabsArr={toolbarInputs} selected="profile" fixed row /> : null}
    </div>
  );
}

export default UserInterface;
