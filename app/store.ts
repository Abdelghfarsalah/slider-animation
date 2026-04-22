import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./features/drawerSlice";
import changeBackgroundSlice from "./features/sliderchangeslice";
export const SliderStore=configureStore({
    reducer:{
        "changeBackground":changeBackgroundSlice,
        "drawer":drawerSlice
    }
})