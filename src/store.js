import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import dataSlice from "./slices/dataSlice";
import infoSlice from "./slices/infoSlice";

const store = configureStore({
  reducer: {
    apiRedux: apiSlice,
    dataLocker: dataSlice,
    infoApi: infoSlice,
  },
});

// const myOwnThunkFunction = (dispatch, getState) => {
//   const before = getState();
//   console.log("BEFORE", before);
//   dispatch(getAuth("DUMMY", "DUMMY CONTENT"));

//   console.timeLog("AFTER", getState());
// };

// store.dispatch(myOwnThunkFunction);

export default store;
