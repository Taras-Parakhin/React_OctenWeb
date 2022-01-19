import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

import css from './UserAlbums.module.css';

const UserAlbums = ({album}) => {
    const {id, title} = album;
    const navigate = useNavigate();
    const {id: userId, albumId} = useParams();

    const getPhotos = () => {
        navigate(`/users/${userId}/albums/${albumId}/photos`)
    }

    return (
        <div className={css.wrap}>
            <h3>{id}. {title}</h3>
            <Link to={id.toString() + '/photos'}><button onClick={getPhotos}>Photos</button></Link>

            <hr/>
        </div>
    );
};

export default UserAlbums;