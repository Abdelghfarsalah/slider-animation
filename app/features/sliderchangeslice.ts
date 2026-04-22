import { createSlice } from "@reduxjs/toolkit";


export const changeBackgroundSlice = createSlice({
  name: "changeBackground",
  initialState: {
    background: "/images/download1.jpg",
    index:0
  },
  reducers: {
    changeBackground: (state, action) => {
      state.background = action.payload.background;
      state.index = action.payload.index;
    }
  }
});


export const { changeBackground } = changeBackgroundSlice.actions;
export default changeBackgroundSlice.reducer;