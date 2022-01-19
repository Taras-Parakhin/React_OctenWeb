import {Link, useNavigate} from "react-router-dom";

import css from './Users.module.css';

const Users = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    const getAlbums = () =>{
        navigate(`/users/${id}/albums`)
    }

    return (
        <div className={css.users}>
            <Link to={id.toString()} state={user}><button className={css.btnUser}>{id}. {name}</button></Link>
            <Link to={id}><button onClick={getAlbums} className={css.btnAlbum}>Albums</button></Link>
        </div>
    );
};

export default Users;