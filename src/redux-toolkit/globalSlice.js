import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
  },
});

export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
