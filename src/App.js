import './App.css';

import {useEffect, useState} from "react";

import {getUsers} from "./components/services/serviceUsers";
import {getPosts} from "./components/services/servicePosts";
import {getComments} from "./components/services/serviceComments";

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  let [users, setUsers] = useState([]),
      [posts, setPosts] = useState([]),
      [comments, setComments] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers(value))
  },[]);

  useEffect(() => {
    getPosts().then(value => setPosts(value))
  },[]);

  useEffect(() => {
    getComments().then(value => setComments(value))
  },[]);

  return (
    <div className="App">
      <div className="wrap">
        <div>{
            users.map(user => <Users
                key={user.id}
                user={user}
            />)
          }</div>

        <div className='posts'>{
            posts.map(post => <Posts
                key={post.id}
                post={post}
            />)
          }</div>
      </div>

      {
        comments.map(comment => <Comments
            key={comment.id}
            comment={comment}
        />)
      }
    </div>
  );
}

export default App;
