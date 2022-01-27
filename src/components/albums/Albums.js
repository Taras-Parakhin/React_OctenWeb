import {Link} from "react-router-dom";

import css from './Albums.module.css';

const Albums = ({album}) => {
    const {id, title} = album;

    return (
        <div className={css.album}>
            <h3>{id}. {title}</h3>
            <Link to={`${id.toString()}/photos`}><button className={css.btn_photo}>Photos</button></Link>
        </div>
    );
};

export default Albums;