import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
    sideBar: true,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
    toggleSideBar: (state, action) => {
      return {
        ...state,
        sideBar: action.payload,
      };
    },
  },
});

export const { toggleDarkMode, toggleSideBar } = globalSlice.actions;
export default globalSlice.reducer;
