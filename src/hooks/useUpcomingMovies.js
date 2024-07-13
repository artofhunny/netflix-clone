import { useEffect } from "react"
import { NOW_PLAYING_API, options, UPCOMING_API } from "../components/utils/constants";
import { addNowPlayingMovies, addUpcomingMovies } from "../components/utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovie = () => {
    const dispatch = useDispatch();

    const fetchUpcomingMovie = async () => {
        const data = await fetch(UPCOMING_API, options);
        const jsonData = await data.json();

        dispatch(addUpcomingMovies(jsonData.results));
        // console.log(jsonData.results);
    }

    useEffect(() => {
        fetchUpcomingMovie();
    }, []);

}

export default useUpcomingMovie;