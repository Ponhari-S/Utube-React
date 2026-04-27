import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        clearSideBar: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export const isMenuOpen =(state) => state.sidebar.isMenuOpen; 
export const { toggleSideBar,clearSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;