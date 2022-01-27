import {Link} from "react-router-dom";

import css from './UserDetails.module.css';

const UserDetails = ({user}) => {
    const {username, email, address, phone, website, company} = user;

    return (
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

                <Link to={'posts'}><button className={css.btn_posts}>Posts</button></Link>
            </div>
        </div>
    );
};

export default UserDetails;


