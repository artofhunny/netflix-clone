import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { modifyMovieListWrap } from "./utils/changeCssSlice";
import useChangeCss from "../hooks/useChangeCss";

const MovieList = ({movies, title, setide}) => {
    const changeCss = useChangeCss("flex-nowrap", "flex-wrap");

    if(movies === null) return;
    
    return (
        <div className="">
            <h1 className="text-2xl py-2 font-bold text-white" >{title}</h1>
            <div className={"flex overflow-x-scroll gap-3 scroll-hidden " + changeCss}>
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