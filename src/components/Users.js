import {useEffect, useState} from "react";

import {userService} from "../services/user.service";
import {postService} from "../services/post.service";
import User from "./User";
import Posts from "./Posts";

import './Users.css';

const Users = () => {
    let [users, setUsers] = useState([]),
        [user, setUser] = useState(null),
        [posts, setPosts] = useState([]);
    let divPosts = document.getElementsByClassName('posts')[0];
    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    },[]);

    const getUser = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    };

    const getPosts = (id) => {
        postService.getByUserId(id)
            .then(value => setPosts(value))
    };

    return (
      <div>
          <div className='wrap'>
              <div>
                  {users.map(user => <User
                      key={user.id}
                      user={user}
                      getUser={getUser}
                  />)
                  }
              </div>

              <div className='descr'>{user && <div>
                  <h3>{user.username}</h3>
                  <div><strong>email:</strong> {user.email}</div>
                  <div className='address'><strong>address:</strong>
                      <div><strong>street:</strong> {user.address.street}</div>
                      <div><strong>suite:</strong> {user.address.suite}</div>
                      <div><strong>city:</strong> {user.address.city}</div>
                      <div><strong>zipcode:</strong> {user.address.zipcode}</div>
                      <div className='geo'><strong>geo:</strong>
                          <div><strong>lat:</strong> {user.address.geo.lat}</div>
                          <div><strong>lng:</strong> {user.address.geo.lng}</div>
                      </div>
                  </div>
                  <div><strong>phone:</strong> {user.phone}</div>
                  <div><strong>website:</strong> {user.website}</div>
                  <div className='company'><strong>company:</strong>
                      <div><strong>name:</strong> {user.company.name}</div>
                      <div><strong>catchPhrase:</strong> {user.company.catchPhrase}</div>
                      <div><strong>bs:</strong> {user.company.bs}</div>
                  </div>
                  <button onClick={()=>getPosts(user.id)}>Posts</button>
              </div>}
              </div>
          </div>
          <hr/>
          <div className='posts'>{posts.map(post => <Posts
              key={post.id}
              post={post}
              getPosts={getPosts}
          />)
          }
          </div>
      </div>
    )
}

export default Users;

