import './Comments.css';
import {getComments} from "../../services/serviceComments";
import {useEffect, useState} from "react";

function Comments(comment) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value))
    },[]);

    return (
        <>
            {comments.map(comment =>
                <div className='comment' key={comment.id}>
                    <h3>{comment.id} {comment.name}</h3>
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                </div>)
            }
        </>
    )
}

export default Comments;