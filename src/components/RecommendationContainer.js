import { useParams } from "react-router-dom";
import useRecommendationMovies from "../hooks/useRecommendationMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
// import useVideoTrailer from "../hooks/useVideoTrailer";

const RecommendationContainer = ({id}) => {

    // const {movieId} = props;
    const movieDetail = useSelector((store) => store.movies.playingInPlayer);

    const recommendedMovies = useSelector((store) => store.movies.recommendedMovies);
    // console.log(id);
    // const { movieId } = useParams();
    // const trailerKey = useVideoTrailer(movieId);
    // useVideoTrailer(movieId);

    return (
        <div>
            <MovieList movies={recommendedMovies} title={"Recommendations"} />
        </div>
    );
}

export default RecommendationContainer;