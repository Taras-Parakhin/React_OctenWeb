import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {commentsService} from "../../services/comments.service";
import PostComments from "../../components/postComments/PostComments";

const PostCommentsPage = () => {
    const [postComments, setPostComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        commentsService.getByPostId(id).then(value => setPostComments([...value]))
    },[id])

    return (
        <div>
            <div>
                {postComments && (<div>{postComments.map(postComment => <PostComments key={postComment.id} postComment={postComment}/>)}</div>)}
            </div>
        </div>
    );
};

export default PostCommentsPage;