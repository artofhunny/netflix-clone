import { useEffect } from "react"
import { NOW_PLAYING_API, options } from "../components/utils/constants";
import { addNowPlayingMovies } from "../components/utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API, options);
        const jsonData = await data.json();
        jsonData.name = "Now Playing Movies"; 

        dispatch(addNowPlayingMovies(jsonData.results));
        // console.log(jsonData.results);
    }

    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;