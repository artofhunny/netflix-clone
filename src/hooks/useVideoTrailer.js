import { useEffect, useState } from "react"
import { options } from "../components/utils/constants";
// import useMovieTrailer from "./useMovieTrailer";


const useVideoTrailer = (movieId) => {
    const [trailerKey, setTrailerKey] = useState(null);
    
    const fetchVideoTrailer = async () => {

        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?`, options);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const json = await response.json();

            if (json.results && Array.isArray(json.results)) {
                const filteredTrailer = json.results.filter(video => video.type === "Trailer");
                const trailer = (filteredTrailer.length) ? filteredTrailer[0] : json.results[0];
                setTrailerKey(json.results.length ? trailer?.key : 404);
            } else {
                setTrailerKey(404);
            }
        } catch (error) {
            console.error("Failed to fetch video trailer:", error);
            setTrailerKey(404); // Handle error state
        }
    }

    useEffect(() => {
        if (movieId) {
            fetchVideoTrailer();
        }
    }, [movieId]);

    return trailerKey;
}

export default useVideoTrailer;