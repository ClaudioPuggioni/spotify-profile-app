import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PRIMARY } from "./styles/colors";
import { getAuth, setAuth } from "./slices/testSlice";
import { Outlet, useSearchParams } from "react-router-dom";
import MainToolbar from "./components/organisms/MainToolBar/MainToolbar";
import Login from "./components/templates/Login/Login";

function UserInterface() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { auth, token, authLoading, toolbarInputs } = useSelector((state) => state.apiRedux);

  useEffect(() => {
    console.log("auth start is null:", auth);
    if (window.location.search.length > 0 && !auth) {
      const urlParams = new URLSearchParams(window.location.search);
      dispatch(setAuth(searchParams.get("code")));
    } else {
      dispatch(getAuth());
    }
  }, []);

  //   console.log("auth", auth, "token", token, "authLoading", authLoading);

  return (
    <div id="userInterface" style={{ backgroundColor: PRIMARY }}>
      {auth ? <MainToolbar tabsArr={toolbarInputs} selected="profile" fixed /> : null}
      <Outlet />
    </div>
  );
}

export default UserInterface;
