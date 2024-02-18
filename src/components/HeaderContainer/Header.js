import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/discover/movie'}>Movie</NavLink>
            <NavLink to={'/genre/movie/list'}>Genre</NavLink>
        </div>
    );
};

export {Header};