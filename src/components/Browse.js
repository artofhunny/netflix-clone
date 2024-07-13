// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import { addNowPlayingMovies } from "./utils/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryCongtainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovie from "../hooks/useUpcomingMovies";
import useTopRated from "../hooks/useTopRated";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovie();
    useTopRated();

    return(
        <div className="overflow-x-hidden">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}

export default Browse;