import './Users.css';
import {getUsers} from "../services/serviceUsers";
import {useEffect, useState} from "react";

function Users(user) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    },[]);

    return (
        <div className='user'>
            {users.map(user =>
                <div key={user.id}>
                    <h2>{user.id} {user.name}</h2>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>{user.address.street}</div>
                    <div>{user.address.suite}</div>
                    <div>{user.address.city}</div>
                    <div>{user.address.zipcode}</div>
                    <div>{user.address.geo.lat}</div>
                    <div>{user.address.geo.lng}</div>
                    <div>{user.phone}</div>
                    <div>{user.website}</div>
                    <div>{user.company.name}</div>
                    <div>{user.company.catchPhrase}</div>
                    <div>{user.company.bs}</div>
                </div>)
            }
        </div>
    )
}

export default Users;