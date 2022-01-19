import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../../services/users.service";
import User from "../../components/user/User";

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        usersService.getById(id).then(value => setUser({...value}))
    },[id])

    return (
        <>
            {user && (<>{<User user={user}/>}</>)}
        </>
    );
};

export default SingleUserPage;
