import './App.css';
import Form from "./components/form/Form";
import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import {usersService} from "./services/users.service";

function App() {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => {
            setUsers([...value])
            setFilterUsers(...[value])
        })
    },[])

    const getFilter = (data) => {
        let arr = [...users];

        if (data.name) {
            arr = arr.users.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username) {
            arr = arr.users.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email) {
            arr = arr.users.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setFilterUsers(arr)
    }

  return (
    <div className="App">
        <Form getFilter={getFilter}/>
        <Users users={filterUsers}/>
    </div>
  );
}

export default App;
