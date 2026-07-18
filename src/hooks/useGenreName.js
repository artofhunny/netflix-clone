import { useEffect, useState } from "react"
import { options } from "../components/utils/constants";

const useGenereName = (type) => {
    const [geners, setGeners] = useState(null);

    useEffect(() => {
        if (type) {
            fetchGenreData();
        }
    }, [type]);
    
    const fetchGenreData = async () => {
        const response2 = await fetch("https://api.themoviedb.org/3/genre/" + type + "/list?language=en", options);
        const genreTypes = await response2.json();

        setGeners(genreTypes.genres);

        // console.log(genreTypes);
    }

    return geners;

}

export default useGenereName;