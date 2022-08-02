import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PRIMARY } from "./styles/colors";
import { testAuth, resetValid } from "./slices/apiSlice";
import { setTab } from "./slices/dataSlice";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import MainToolbar from "./components/organisms/MainToolBar/MainToolbar";
import ErrorPopUp from "./components/organisms/ErrorPopUp copy/ErrorPopUp";

function UserInterface() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { auth, loading, errorMessage } = useSelector((state) => state.apiRedux);
  const { toolbarInputs, currTab } = useSelector((state) => state.dataLocker);
  useEffect(() => {
    if (window.location.search.length > 0 && !auth) {
      dispatch(testAuth(searchParams.get("code")));
      console.log('Entered')
    } else if (!auth) {
      Navigate("/");
    }
  }, []);

  return (
    <div id="userInterface" style={{ backgroundColor: PRIMARY }}>
      {auth ? (
        <MainToolbar tabsArr={toolbarInputs} selected="profile" fixed />
      ) : null}
      <ErrorPopUp loading={loading} errorMessage={errorMessage}/>
      <Outlet />
    </div>
  );
}

export default UserInterface;
