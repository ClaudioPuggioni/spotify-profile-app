import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PRIMARY } from "./styles/colors";
import { getAuth, setAuth } from "./slices/apiSlice";
import { setTab } from "./slices/dataSlice";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import MainToolbar from "./components/organisms/MainToolBar/MainToolbar";

function UserInterface() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { auth, token, authLoading } = useSelector((state) => state.apiRedux);
  const { toolbarInputs, currTab } = useSelector((state) => state.dataLocker);

  useEffect(() => {
    console.log(auth);
    if (window.location.search.length > 0 && !auth) {
      dispatch(setAuth(searchParams.get("code")));
      Navigate("/Profile");
    }
  }, []);

  const handleGetAuth = () => {
    dispatch(getAuth());
  };

  return (
    <div id="userInterface" style={{ backgroundColor: PRIMARY }}>
      {auth ? <MainToolbar tabsArr={toolbarInputs} selected="profile" fixed /> : null}
      <Outlet context={[handleGetAuth, setTab, currTab]} />
    </div>
  );
}

export default UserInterface;
