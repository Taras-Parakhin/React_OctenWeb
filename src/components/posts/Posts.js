import './Posts.css';
import {getPosts} from "../services/servicePosts";
import {useEffect, useState} from "react";

function Posts(post) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value))
    },[]);

    return (
        <>
            {posts.map(post =>
                <div className='post' key={post.id}>
                    <h3>{post.id} {post.title}</h3>
                    <div>{post.body}</div>
                </div>)
            }
        </>
    )
}

export default Posts;