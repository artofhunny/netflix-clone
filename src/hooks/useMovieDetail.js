import { useEffect, useState } from "react"
import { movieDetail_API, options } from "../components/utils/constants";
import { useDispatch } from "react-redux";
import { addplayingInPlayer } from "../components/utils/moviesSlice";

const useMovieDetail = (movieid) => {
    const [detail, setDetails] = useState(null);
    const dispatch = useDispatch();

    const fetchDetail = async () => {
        const response = await fetch(movieDetail_API + movieid, options);
        const json = await response.json();
        setDetails(json);
        dispatch(addplayingInPlayer(json));
    }

    useEffect(() => {
        if(movieid){
            fetchDetail().catch((err) => {
                console.log(err);
            });
        }
    }, [movieid]);

    return detail;
}

export default useMovieDetail;