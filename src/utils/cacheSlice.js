import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {
        searchResults: {},
        videoDetails: {},
    },
    reducers: {
        setSearchResults: (state, action) => {
            const { query, results } = action.payload;
            state.searchResults[query] = results;
        },
        setVideoDetails: (state, action) => {
            const { videoId, details } = action.payload;
            state.videoDetails[videoId] = details;
        },
    },
})

export const { setSearchResults, setVideoDetails } = cacheSlice.actions;
export default cacheSlice.reducer;