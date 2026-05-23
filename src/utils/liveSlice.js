import { createSlice } from "@reduxjs/toolkit";

const liveSlice = createSlice({
    name: "live",
    initialState: {
        liveChatMessages:[],
    },
    reducers: {
        addLiveChatMessage: (state, action) => {
            if(state.liveChatMessages.length >= 25) {
                state.liveChatMessages.shift();
            }
            state.liveChatMessages.push(action.payload);
        }
    },
})

export const { addLiveChatMessage } = liveSlice.actions;
export default liveSlice.reducer;