import { useNavigate, useParams } from "react-router-dom";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { useDispatch, useSelector } from "react-redux";
// import UserReviews from "./UserReviews";
import { useEffect, useState } from "react";
// import { options } from "./utils/constants";
// import useRecommendationMovies from "../hooks/useRecommendationMovies";
import ReviewsAndRecommendationContainer from "./ReviewsAndRecommendationContainer";
import useRecommendationMovies from "../hooks/useRecommendationMovies";
import { collection, deleteDoc, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "./utils/firebase";
import { v4 as uuidv4 } from 'uuid';  // Import uuid for unique IDs
import Header from "./Header";
import useMovieDetail from "../hooks/useMovieDetail";
import { addplayingInPlayer, addRecommendedMovies } from "./utils/moviesSlice";


// import Header from "./Header";

const VideoTrailor = () => {
    
    const { movieId } = useParams();
    // const movieDetail = useSelector((store) => store?.movies?.playingInPlayer);
    const movieDetail = useMovieDetail(movieId);
    const userDetails = useSelector((store) => store?.user);
    const trailerKey = useVideoTrailer(movieId);
    // const movieTitle = useSelector((store) => store.movies.playingInPlayer.title);
    // console.log(movieTitle);
    // const trailerKey = movieDetail.key;
    // const id = movieDetail.id;
    const navigate = useNavigate();
    const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    
    const recommendedMovies = useRecommendationMovies(movieId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addRecommendedMovies(recommendedMovies));
        // dispatch(addplayingInPlayer(movieDetail));
    }, [recommendedMovies]);
    

    const addToWatchList = async (watchlistId) => {
        try {
            await setDoc( doc(db, 'Watchlist', userDetails.uid, 'watchlistId', watchlistId), {
                movie_id: movieDetail.id,
            });
            console.log('Movie added to watchlist successfully!');
        } catch (error) {
            console.error('Error adding movie to watchlist:', error);
        }
    }
   
    const removeFromWatchList = async (watchlistId) => {
        try {
            await deleteDoc(doc(db, 'Watchlist', userDetails.uid, 'watchlistId', watchlistId));
            console.log('Movie removed from watchlist successfully!');
        } catch (error) {
            console.error('Error removing movie from watchlist:', error);
        }
    }

    useEffect(() => {
        if (!userDetails) return;
    
        if(movieDetail){
            const watchlistRef = collection(db, 'Watchlist', userDetails.uid, 'watchlistId');
            const q = query(watchlistRef);
            const unsubscribe = onSnapshot(q, (snapshot) => {
            const watchlistData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setWishlist(watchlistData);
            
            
        });
     
        return () => unsubscribe();
        }
    }, [movieDetail]);

    useEffect(() => {
        if(wishlist.length > 0){
            const movieExists = wishlist.find(movie => movie.movie_id === movieDetail.id) !== undefined;
            setIsAddedToWatchlist(movieExists);
        }
    }, [wishlist, movieDetail]);

    // console.log(wishlist);

    if (!movieDetail || !trailerKey) {
        return (
            <section className="bg-zinc-950 text-white flex items-center justify-center min-h-screen">
                <h1>Loading...</h1>
            </section>
        );
    }

// adding movie to watchlist
    const handelAddToWatchlist = () => {
        // useEffect(() => {
            const watchlistId = uuidv4();
            if(!isAddedToWatchlist){
                addToWatchList(watchlistId);
            }
            else {
                const movieInWishlist = wishlist.find(movie => movie.movie_id === movieDetail.id);
                if (movieInWishlist) {
                    removeFromWatchList(movieInWishlist.id);
                }
            }
            setIsAddedToWatchlist(!isAddedToWatchlist);
        // }, []);
    }

  

    if (trailerKey != null) return (
        <section className="bg-zinc-950 text-white">
            <Header />
            <div>
                {
                (typeof(trailerKey) !== "number") ?
                    <iframe width="560"
                        className="h-[40vh] w-screen sm:h-[60vh] lg:h-[70vh]"
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

            <div className="flex justify-between items-center py-2 px-3 sm:py-4 sm:px-7 lg:py-6 lg:px-10">
                <h1 className="lg:text-4xl sm:text-3xl font-bold">
                    {movieDetail.title}
                    {/* {movieTitle} */}
                </h1>

                <div onClick={handelAddToWatchlist} className={`${isAddedToWatchlist? "text-green-600" : "text-white"} cursor-pointer flex text-xs sm:text-lg lg:text-xl items-center gap-1`}>
                    <span className="material-symbols-outlined text-[16px] sm:text-2xl lg:text-3xl">
                        {isAddedToWatchlist? "tab_close" : "library_add"}
                    </span>
                    {/* <span>{isAddedToWatchlist ? "Remove-From-Watchlist" : "Add-To-Watchlist"}</span> */}
                    {/* <span>{!isAddedToWatchlist && "Add-To-Watchlist"}</span> */}
                </div>
            </div>

            <div>
                {/* <UserReviews /> */}
                <ReviewsAndRecommendationContainer movieId={movieDetail.currentId} />
            </div>

        </section>
    );
}

export default VideoTrailor;



