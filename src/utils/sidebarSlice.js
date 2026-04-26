import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const isMenuOpen =(state) => state.sidebar.isMenuOpen; 
export const { toggleSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;