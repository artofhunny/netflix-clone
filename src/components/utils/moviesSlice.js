import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        videoTrailer: null,
        popularMovies: null,
        upcomingMovies: null,
        topRated: null,
    },
    reducers: {
        addNowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
        addVideoTrailer(state, action){
            state.videoTrailer = action.payload;
        },
        addPopularMovies(state, action){
            state.popularMovies = action.payload;
        },
        addUpcomingMovies(state, action){
            state.upcomingMovies = action.payload;
        },
        addTopRated(state, action){
            state.topRated = action.payload;
        },
    }
});

export const { addNowPlayingMovies, 
                addVideoTrailer, 
                addPopularMovies, 
                addUpcomingMovies, 
                addTopRated 
             } = movieSlice.actions;
             
export default movieSlice.reducer;