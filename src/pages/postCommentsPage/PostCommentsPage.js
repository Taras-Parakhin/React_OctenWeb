import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import Comments from "../../components/comments/Comments";

import css from './PostCommentsPage.module.css';

const PostCommentsPage = () => {
    const [postComments, setPostComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        commentsService.getByPostId(id).then(value => setPostComments([...value]))
    },[id])

    return (
        <div className={css.comments}>
            {postComments && <div>{postComments.map(comment => <Comments key={comment.id} comment={comment}/>)}</div>}
        </div>
    );
};

export {PostCommentsPage};