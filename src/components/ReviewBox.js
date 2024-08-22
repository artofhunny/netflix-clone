import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { options } from "./utils/constants";

const ReviewBox = ({ review }) => {

    const [reviewedMovie, setReviewedMovie] = useState(null);

    // console.log(review.movie_id);

    useEffect(
        () => {
            const fetchMovie = async () => {
                const data = await fetch("https://api.themoviedb.org/3/movie/" + review.movie_id, options);
                const jsonData = await data.json();

                // console.log(jsonData);
                setReviewedMovie(jsonData);
            }
            fetchMovie()
        },

        []
    );

    
    return (
      <div className="bg-gray-800 flex justify-between p-2 sm:p-3 lx:p-4 rounded-lg shadow-lg">
        <div>
            <div className="flex items-center sm:mb-2 lg:mb-2">
                {/* <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold">
                    {review.user[0].toUpperCase()}
                </div> */}

                <img className="flex-shrink-0 w-6 self-start sm:w-6 lg:w-10 rounded-full" src="/avatar icon.png" alt="user-icon" />

                <div className="ml-3">
                    {/* <p className="text-sm font-medium">{review.user}</p> */}
                    <p className="text-[10px] sm:text-xs lg:text-xs text-gray-400">{new Date(review?.timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <p className="text-sm sm:text-mg lg:text-lg">{review.review_text}</p>
            {/* <p className="mt-2">Rating: {review.rating} / 5</p> */}
        </div>

        {reviewedMovie && <div>
            <MovieCard key={reviewedMovie.id} img={reviewedMovie.poster_path} movieId={reviewedMovie.id} movieDetail={reviewedMovie} />
        </div>}
      </div>
    );
  };
  
  export default ReviewBox;
  