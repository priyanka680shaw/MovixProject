import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../Slice/MovieSlice";
import React from 'react'

const StoreIndex = configureStore({
    reducer:{
        movieSlice,
    }
})

export default StoreIndex;