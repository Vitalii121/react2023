import css from './Header.module.css';
import {useChapter} from "../../hooks";

const Header = () => {

    const {chapter} = useChapter();

    return (
        <div>
            <div className={css.Header}>
                {
                    chapter ?
                        <div>{chapter}</div>
                        :
                        <div>
                            Rick and Morty
                        </div>
                }
            </div>
        </div>
    );
};

export {Header};