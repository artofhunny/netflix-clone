import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { options } from "./utils/constants";

const WishlistBox = ({movieDetail}) => {
    const [watchlistedMovie, setWatchlistedMovie] = useState(null);

    useEffect(
        () => {
            const fetchMovie = async () => {
                const data = await fetch("https://api.themoviedb.org/3/movie/" + movieDetail.movie_id, options);
                const jsonData = await data.json();

                // console.log(jsonData);
                setWatchlistedMovie(jsonData);
            }
            fetchMovie()
        },
        []
    );

    return !watchlistedMovie? <h1>Loading...</h1> : (
        <div>
            <MovieCard key={watchlistedMovie.id} img={watchlistedMovie.poster_path} movieId={watchlistedMovie.id} movieDetail={watchlistedMovie} />
        </div>
    );
}

export default WishlistBox;