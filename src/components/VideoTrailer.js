import { useNavigate, useParams } from "react-router-dom";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";
// import UserReviews from "./UserReviews";
import { useEffect, useState } from "react";
// import { options } from "./utils/constants";
// import useRecommendationMovies from "../hooks/useRecommendationMovies";
import ReviewsAndRecommendationContainer from "./ReviewsAndRecommendationContainer";
import useRecommendationMovies from "../hooks/useRecommendationMovies";
// import Header from "./Header";

const VideoTrailor = () => {

    const { movieId } = useParams();
    const movieDetail = useSelector((store) => store.movies.playingInPlayer);
    // const [id, setId] = useState(movieDetail.id);
    // const trailerKey = useVideoTrailer(movieId);
    const trailerKey = movieDetail.traierKey;
    // const id = movieDetail.id;
    const navigate = useNavigate();

    const recommendedMovies = useRecommendationMovies(599);


    useEffect(() => {
        // setId(movieDetail.id);
        // console.log(movieDetail.id);
    }, [movieId]);

    if (trailerKey != null) return (
        <section>
            <div>
                {
                (typeof(trailerKey) !== "number") ?
                    <iframe width="560"
                        className="w-screen h-[70vh]"
                        height="315"
                        src={"https://www.youtube.com/embed/" + trailerKey} title="YouTube video player" 
                        // frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        >
                    </iframe>
                    :
                    <h1>No trailer found for this movie</h1>
                }
            </div>

            <div>
                <h1 className="text-4xl font-bold py-3 pl-10 pt-5 pb-8">
                    {movieDetail.title}
                </h1>
            </div>

            <div>
                {/* <UserReviews /> */}
                <ReviewsAndRecommendationContainer movieId={movieDetail.currentId} />
            </div>

        </section>
    );
}

export default VideoTrailor;



