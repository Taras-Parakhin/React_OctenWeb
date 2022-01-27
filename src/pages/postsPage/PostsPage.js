import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Posts from "../../components/posts/Posts";

import css from './PostsPage.module.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => setPosts([...value]))
    },[])

    return (
        <div className={css.posts}>
            <div>{posts.map(post => <Posts key={post.id} post={post}/>)}</div>
            <div className={css.outlet}><Outlet/></div>
        </div>
    );
};

export {PostsPage};