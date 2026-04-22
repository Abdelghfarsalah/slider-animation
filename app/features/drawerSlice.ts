import { createSlice } from "@reduxjs/toolkit";


export const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState:{
    open:false
  },
  reducers: {
    open: (state,) => {
      state.open=true;
    },
    close:(state) => {
      state.open=false;
    },
  }
})



export const { open,close } = drawerSlice.actions;
export default drawerSlice.reducer;