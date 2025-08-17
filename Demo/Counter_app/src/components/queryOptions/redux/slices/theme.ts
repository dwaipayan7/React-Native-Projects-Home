import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../../../types/themetypes";


const initialState: ThemeState = {
    darkMode: false
}


const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        },
        setTheme: (state, action) => {
            state.darkMode = action.payload
        }
    }
});


export const {toggleTheme, setTheme} = themeSlice.actions;
export default themeSlice.reducer;