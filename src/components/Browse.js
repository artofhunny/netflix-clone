// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import { addNowPlayingMovies } from "./utils/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryCongtainer";

const Browse = () => {

    useNowPlayingMovies();
   

    return(
        <div className="">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}

export default Browse;