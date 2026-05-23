import { createSlice } from "@reduxjs/toolkit";

const liveSlice = createSlice({
    name: "live",
    initialState: {
        liveChatMessages: [],
    },
    reducers: {
        addLiveChatMessage: (state, action) => {
            state.liveChatMessages.splice(25,1);
            state.liveChatMessages.push(action.payload);
        }
    },
})

export const { addLiveChatMessage } = liveSlice.actions;
export default liveSlice.reducer;