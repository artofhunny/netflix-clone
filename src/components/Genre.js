import { useEffect, useRef, useState } from "react";
import { options } from "./utils/constants";
import useFetchGenre from "../hooks/useFetchGenre";
import { useParams } from "react-router-dom";
import Header from "./Header";
import useGenereName from "../hooks/useGenreName";
import useMovieDetail from "../hooks/useMovieDetail";
import MovieCard from "./MovieCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./utils/firebase";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

const Genre = () => {

    const type = useParams();

    const [page, setPage] = useState(0);
    const pageRefs = useRef([]);    
    const programs = useFetchGenre(type?.type);

    const handelChangePage = (i) => {
        setPage(i);
    }

    return !programs? <h1>Loading...</h1> : (
        <section className="bg-zinc-950">
            <Header />


                <div className="flex lg:gap-6 lg:p-6 md:gap-6 md:p-6 p-2 gap-2 flex-wrap justify-center">
                    {
                        programs.slice(page * 20, (page+1) * 20).map((ele, i) => {
                            return <MovieCard key={i} img={ele.poster_path} movieId={ele.id} />
                        })
                    }
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center py-10 text-white">
                        <span 
                            onClick={() => {
                                if(page > 0) setPage(page-1);
                            }}
                            className="material-symbols-outlined text-xs lg:text-base cursor-pointer">
                            arrow_back_ios
                        </span>
                        <div className="">
                            {
                                new Array(programs.length/20).fill("").map((_, i) => {
                                    return <span
                                            key={programs[i].id}
                                            ref={(span) => pageRefs.current[i] = span}
                                            onClick={() => handelChangePage(i)}
                                            className={`cursor-pointer border border-solid border-white lg:p-3 md:p-2 p-1 ${i === page? "text-black bg-white" : ""}`}>{i+1}</span>;
                                })
                            }
                        </div>
                        <span
                            onClick={() => {
                                if(page < (programs.length/20)-1) setPage(page+1);
                            }}
                            className="material-symbols-outlined lg:pl-2 text-xs pl-1 lg:text-base cursor-pointer">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>

        </section>
    );
}

export default Genre;