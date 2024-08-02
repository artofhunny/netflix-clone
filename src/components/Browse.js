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
import { Outlet, useLocation } from "react-router-dom";

const Browse = () => {

    // const location = useLocation();
    // console.log(location.pathname);

    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovie();
    useTopRated();

    return(
        <div className="overflow-x-hidden bg-zinc-950 font-bold text-white">
            <Header />
            {/* <MainContainer />
            <SecondaryContainer /> */}
            <Outlet />
            
        </div>
    );
}

export default Browse;