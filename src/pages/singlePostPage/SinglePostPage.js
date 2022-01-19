import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../services/posts.service";
import Post from "../../components/post/Post";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }

        postsService.getById(id).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            {post && (<div>{<Post post={post}/>}</div>)}
        </div>
    )
};

export default SinglePostPage;