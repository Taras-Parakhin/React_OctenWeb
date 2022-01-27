import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../services/users.service";
import UserDetails from "../../components/userDetails/UserDetails";

import css from './UsersDetailsPage.module.css';

const UsersDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUserDetails(state)
            return
        }

        usersService.getById(id).then(value => setUserDetails({...value}))
    },[id])

    return (
        <div>
            {userDetails && <div>{<UserDetails user={userDetails}/>}</div>}
            <div className={css.posts}><Outlet/></div>
        </div>
    );
};

export {UsersDetailsPage};