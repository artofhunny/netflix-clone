import { createSlice, current } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        videoTrailer: null,
        popularMovies: null,
        upcomingMovies: null,
        topRated: null,
        playingInPlayer: null,
        recommendedMovies: null,
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
        addplayingInPlayer(state, action){
            state.playingInPlayer = action.payload;
        },
        addTrailerKey(state, action){
            state.playingInPlayer.traierKey = action.payload;
        },
        addPlayingId(state, action){
            state.playingInPlayer.currentId = action.payload;
        },
        addRecommendedMovies(state, action){
            state.recommendedMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies, 
                addVideoTrailer, 
                addPopularMovies, 
                addUpcomingMovies, 
                addTopRated,
                addplayingInPlayer,
                addTrailerKey,
                addPlayingId,
                addRecommendedMovies,
             } = movieSlice.actions;
             
export default movieSlice.reducer;