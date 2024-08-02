import { useEffect, useState } from "react"
import { options } from "../components/utils/constants";
// import useMovieTrailer from "./useMovieTrailer";


const useVideoTrailer = (movieId) => {
    const [trailerKey, setTrailerKey] = useState(null);
    
    const fetchVideoTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?", options);
        const json = await data.json();
        
        const filterdTrailer = json?.results?.filter(video => video.type === "Trailer");
        const trailer = (filterdTrailer.length) ? filterdTrailer[0] : json.results[0];  
        (!json?.results.length) ? setTrailerKey(404) : setTrailerKey(trailer?.key);
        // console.log(json);
    }

    useEffect(
        () => {
            fetchVideoTrailer();
        },[]
    );

    return trailerKey;
}

export default useVideoTrailer;