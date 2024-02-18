

import css from "./Movie.module.css";


const Movie = ({movie}) => {

    const {original_title, poster_path} =movie;

    return (
        <div className={css.Movie}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>
            <h2>{original_title}</h2>
        </div>
    );
};

export {Movie};