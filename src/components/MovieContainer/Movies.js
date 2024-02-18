import {useEffect, useState} from "react";

import css from "./Movies.module.css";
import {movieService} from "../../services";
import {Movie} from "./Movie";

const Movies = () => {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        movieService.getAll().then(({data: {results}}) => setMovies(results));
    }, []);

    console.log(movies)
    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};