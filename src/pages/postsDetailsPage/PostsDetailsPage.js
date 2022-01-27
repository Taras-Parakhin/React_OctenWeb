import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../services/posts.service";
import PostDetails from "../../components/postDetails/PostDetails";

import css from './PostsDetailsPage.module.css';

const PostsDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPostDetails(state)
            return
        }

        postsService.getById(id).then(value => setPostDetails({...value}))
    },[id])

    return (
        <div className={css.postDetails}>
            {postDetails && <div>{<PostDetails post={postDetails}/>}</div>}
            <Outlet/>
        </div>
    );
};

export {PostsDetailsPage};