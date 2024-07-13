import { useEffect } from "react"
import { NOW_PLAYING_API, options, POPULAR_API } from "../components/utils/constants";
import { addNowPlayingMovies, addPopularMovies } from "../components/utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const fetchPopularMovies = async () => {
        const data = await fetch(POPULAR_API, options);
        const jsonData = await data.json();
        // jsonData.name = "Now Playing Movies";

        dispatch(addPopularMovies(jsonData.results));
        // console.log(jsonData.results);
    }

    useEffect(() => {
        fetchPopularMovies();
    }, []);

}

export default usePopularMovies;