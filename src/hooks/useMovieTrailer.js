import { useDispatch } from "react-redux";
import { options } from "../components/utils/constants";
import { addVideoTrailer } from "../components/utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (vidId) => {
    const dispatch = useDispatch();

    const fetchVideoTrailer = async () => {
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/" + vidId + "/videos?", options);
            if (!data.ok) {
                throw new Error(`Network response was not ok: ${data.statusText}`);
            }
            const jsonData = await data.json();

            if(jsonData.results && Array.isArray(jsonData.results)){
                const filterdTrailer = jsonData.results.filter(ele => ele.type === "Trailer");
                const trailer = (filterdTrailer.length) ? filterdTrailer[0] : jsonData[0];
                dispatch(addVideoTrailer(trailer));
            }
        } catch(error){
            console.log("Failed to fetch video trailer: ", error);
        }
    }

    useEffect(() => {
        if(vidId){
            fetchVideoTrailer();
        }
    }, [vidId]);
}

export default useMovieTrailer;