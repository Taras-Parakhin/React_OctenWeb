import css from './UsersPage.module.css'

import Users from "../../components/users/Users";
import {usersService} from "../../services/users.service";

import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers([...value]))
    },[])

    return (
        <div>
            <h1>Users</h1>

           <div className={css.wrap}>
               <div>{users.map(user => <Users key={user.id} user={user}/>)}</div>
               <Outlet/>
           </div>
        </div>
    );
};

export default UsersPage;