import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGES } from "./constants";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: SUPPORTED_LANGUAGES[0]["code"],
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
