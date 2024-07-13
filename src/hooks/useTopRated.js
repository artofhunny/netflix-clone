import { useEffect } from "react"
import { NOW_PLAYING_API, options, TOP_RATED, UPCOMING_API } from "../components/utils/constants";
import { addNowPlayingMovies, addTopRated, addUpcomingMovies } from "../components/utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRated = () => {
    const dispatch = useDispatch();

    const fetchTopRated = async () => {
        const data = await fetch(TOP_RATED, options);
        const jsonData = await data.json();

        dispatch(addTopRated(jsonData.results));
        // console.log(jsonData.results);
    }

    useEffect(() => {
        fetchTopRated();
    }, []);

}

export default useTopRated;