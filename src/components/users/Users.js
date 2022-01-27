import {Link} from "react-router-dom";

import css from './Users.module.css';

const Users = ({user}) => {
    const {id, name}= user;

    return (
        <div className={css.users}>
            <Link to={id.toString()} state={user}><button className={css.btnUser}>{id}. {name}</button></Link>
            <Link to={`${id.toString()}/albums`}><button className={css.btnAlbum}>Albums</button></Link>
        </div>
    );
};

export default Users;
