import { useDispatch } from "react-redux";
import { options } from "../components/utils/constants";
import { addVideoTrailer } from "../components/utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (vidId) => {
    const dispatch = useDispatch();

    const fetchVideoTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + vidId + "/videos?", options);
        const jsonData = await data.json();

        // console.log(jsonData);

        const filterdTrailer = jsonData.results.filter(ele => ele.type === "Trailer");
        const trailer = (filterdTrailer.length) ? filterdTrailer[0] : jsonData[0];
        // console.log(trailer);
        // setTrailorId(trailer.key);
        dispatch(addVideoTrailer(trailer));
    }

    useEffect(() => {
        fetchVideoTrailer();
    }, []);
}

export default useMovieTrailer;