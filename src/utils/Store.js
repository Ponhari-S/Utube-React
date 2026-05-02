import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import cacheReducer from "./cacheSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        cache: cacheReducer,
    },
});

export default store;
