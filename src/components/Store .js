import { ConfigureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../utils/sidebarSlice";

const store = ConfigureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
});

export default store;
