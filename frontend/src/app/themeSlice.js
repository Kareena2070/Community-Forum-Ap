import { createSlice } from "@reduxjs/toolkit";

// Read saved theme from localStorage (safe for SSR)
const savedTheme =
  typeof window !== "undefined" ? localStorage.getItem("themeMode") : null;

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: savedTheme || "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", state.mode);
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", action.payload);
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectThemeMode = (state) => state.theme.mode;
export default themeSlice.reducer;
