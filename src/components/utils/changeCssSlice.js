import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

const changeCssSlice = createSlice({
    name: "changeCss",
    initialState: {
        movieListWrap: "flex-nowrap",
    },
    reducers: {
        modifyMovieListWrap(state, action){
            state.movieListWrap = (action.payload !== '/browse') ? "flex-wrap" : "flex-nowrap";
            console.log(state.movieListWrap);
        }
    }
});

export const { modifyMovieListWrap } = changeCssSlice.actions;
export default changeCssSlice.reducer;