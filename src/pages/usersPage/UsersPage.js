import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import Users from "../../components/users/Users";

import css from './UsersPage.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers([...value]))
    },[])

    return (
        <div className={css.users}>
            <div>{users.map(user => <Users key={user.id} user={user}/>)}</div>
            <div className={css.outlet}><Outlet/></div>
        </div>
    );
};

export {UsersPage};