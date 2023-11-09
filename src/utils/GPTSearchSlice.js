import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "GPTSearch",
  initialState: {
    showGptSearch: false,
  },

  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer;
