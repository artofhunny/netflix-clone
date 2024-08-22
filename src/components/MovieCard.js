import { Link, useLocation, useParams } from "react-router-dom";
import { POSTER_URL } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingId, addplayingInPlayer, addRecommendedMovies, addTrailerKey } from "./utils/moviesSlice";
import useChangeCss from "../hooks/useChangeCss";
import { useState, useEffect } from "react";
import useVideoTrailer from "../hooks/useVideoTrailer";
import VideoTrailor from "./VideoTrailer";
import useRecommendationMovies from "../hooks/useRecommendationMovies";
import useMovieDetail from "../hooks/useMovieDetail";


const MovieCard = ({img, movieId, movieDetail}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    // const movieDetails = useMovieDetail(movieId);
    // const { movieid } = useParams();
    // const trailerKey = useVideoTrailer(movieDetail.id);
    // const playerMovie = useSelector((store) => store.movies.playingInPlayer);
    // const recommendedMovies = useRecommendationMovies(movieDetail.id);
    // localStorage.setItem("Id", null);
    

    const handelMovieTrailerPage = () => {
        // dispatch(addplayingInPlayer(movieDetails));
        // dispatch(addTrailerKey(trailerKey));
        // dispatch(addPlayingId(movieId));
        // dispatch(addRecommendedMovies(recommendedMovies));
        // if(location.pathname === ("/browse/trailer/" + movieId)){
            // return <VideoTrailor />
        // } 

        // console.log(allReviews);

        localStorage.setItem("currentRoute", "Video Trailer");
        localStorage.setItem("Id", movieId);
       

        
    }


    return(
        <Link to={'/trailer/' + movieId}>
            <div onClick={handelMovieTrailerPage} >
                {/* <img className={"rounded min-" + changeCss + " " + changeCss } src={POSTER_URL + img} alt="" /> */}
                <img className={`w-16 min-w-14 sm:w-24 sm:min-w-28 lg:w-36 lg:min-w-36 rounded-md`} src={POSTER_URL + img} alt="" />
            </div>
        </Link>
    );
}

export default MovieCard;