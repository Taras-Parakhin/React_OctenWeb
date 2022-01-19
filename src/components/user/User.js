import css from './User.module.css';

import {Link, Outlet, useNavigate} from "react-router-dom";

const User = ({user}) => {
    let id = user.id;
    let navigate = useNavigate();
    let divUser = document.getElementsByClassName('User_user__Ogj+G')[0];

    const toPosts = () => {
        navigate(`/users/${id}/posts`)
    }

    console.log(<Outlet/>)

    return (
      <div className={css.wrap}>
        <div>
            <div className={css.user}>
                <div>
                    <h3>{user.username}</h3>
                    <div><strong>email:</strong> {user.email}</div>
                    <div className={css.address}><strong>address:</strong>
                        <div><strong>street:</strong> {user.address.street}</div>
                        <div><strong>suite:</strong> {user.address.suite}</div>
                        <div><strong>city:</strong> {user.address.city}</div>
                        <div><strong>zipcode:</strong> {user.address.zipcode}</div>
                        <div className={css.geo}><strong>geo:</strong>
                            <div><strong>lat:</strong> {user.address.geo.lat}</div>
                            <div><strong>lng:</strong> {user.address.geo.lng}</div>
                        </div>
                    </div>
                    <div><strong>phone:</strong> {user.phone}</div>
                    <div><strong>website:</strong> {user.website}</div>
                    <div className={css.company}><strong>company:</strong>
                        <div><strong>name:</strong> {user.company.name}</div>
                        <div><strong>catchPhrase:</strong> {user.company.catchPhrase}</div>
                        <div><strong>bs:</strong> {user.company.bs}</div>
                    </div>
                    <Link to={id}><button onClick={toPosts}>Posts</button></Link>
                </div>
            </div>
            <div className={css.outlet}><Outlet/></div>
        </div>
      </div>
    );
};

export default User;