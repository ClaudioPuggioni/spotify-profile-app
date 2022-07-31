import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testSlice";

const store = configureStore({
  reducer: {
    apiRedux: testSlice,
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
