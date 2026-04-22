import { configureStore } from "@reduxjs/toolkit";
import changeBackgroundSlice from "./features/sliderchangeslice";
export const SliderStore=configureStore({
    reducer:{
        "changeBackground":changeBackgroundSlice
    }
})