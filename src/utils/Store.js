import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import cacheReducer from "./cacheSlice";
import liveReducer from "./liveSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        cache: cacheReducer,
        live: liveReducer,
    },
});

export default store;
