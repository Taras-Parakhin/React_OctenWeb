import css from './PostsPage.module.css';

import {useEffect, useState} from "react";

import {postsService} from "../../services/posts.service";
import Posts from "../../components/posts/Posts";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => setPosts([...value]))
    },[])

    return (
        <div>
            <h1>Posts</h1>

            <div className={css.wrap}>
                <div>{posts.map(post => <Posts key={post.id} post={post}/>)}</div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;