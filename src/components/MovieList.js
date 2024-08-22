import { useLocation, useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { modifyMovieListWrap } from "./utils/changeCssSlice";
import useChangeCss from "../hooks/useChangeCss";

const MovieList = ({movies, title, setide}) => {
    const changeCss = useChangeCss("flex-nowrap", "flex-wrap");
    const location = useLocation();

    // if(movies === null) return;
    if (!movies) return null;
    
    return (
        <div className={`bg-black lg:bg-transparent ${location.pathname !== "/browse" && "flex flex-col items-center"}`}>
            <h1 className={`lg:text-2xl lg:bg-transparent sm:text-2xl sm:bg-transparent py-2 font-bold ${location.pathname !== "/browse" && "pl-4"} text-white self-start`} >{title}</h1>
            <div className={`flex ${location.pathname === "/browse" && "overflow-x-scroll"} ${location.pathname !== "/browse" && "justify-center"} gap-2 scroll-hidden ` + changeCss}>
                {
                    movies?.slice()?.reverse()?.map(movie => {
                        return <MovieCard key={movie.id} img={movie.poster_path} movieId={movie.id} movieDetail={movie} />
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;