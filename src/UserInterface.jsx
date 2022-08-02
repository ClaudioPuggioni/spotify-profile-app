import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PRIMARY } from "./styles/colors";
import { testAuth, resetValid } from "./slices/apiSlice";
import { setTab } from "./slices/dataSlice";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import MainToolbar from "./components/organisms/MainToolBar/MainToolbar";

function UserInterface() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { auth, errorMessage, isValid, isLoading } = useSelector((state) => state.apiRedux);
  const { toolbarInputs, currTab } = useSelector((state) => state.dataLocker);
  useEffect(() => {
    if (window.location.search.length > 0 && !auth) {
      dispatch(testAuth(searchParams.get("code")));
      console.log('Entered')
    } else if (!auth) {
      Navigate("/");
    }
  }, []);

  if(!isLoading){
    if (isValid) {
      dispatch(resetValid());
      Navigate("/Profile");
    } else {
      setSearchParams({ message: errorMessage });
      Navigate("/test");
    }
  }

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
