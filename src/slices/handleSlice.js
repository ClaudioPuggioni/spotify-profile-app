import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const handleAPIRequest = createAsyncThunk(
  "handleSlice/handleAPIRequest",
  (requestFunction, requestParams, onSuccess, onError) => {
    const dispatch = useDispatch();
    const {accessToken} = useSelector(state=>state.handleSlice)
    let response = await requestFunction(accessToken,requestParams);
    if(response.status+"".startsWith('4')){
        dispatch(refreshAccessToken(requestFunction, onSuccess, onError));
        return null;
    }else{
        let data = await response.json();
        onSuccess(data);
    }
  }
);

const handleSlice = createSlice({
  name: "handleSlice",
  initialState: {
    loading: false,
    isError: false,
    errorMessage: "",
  },
  
});

export const { setAuth, resetValid } = apiSlice.actions;

export default apiSlice.reducer;
