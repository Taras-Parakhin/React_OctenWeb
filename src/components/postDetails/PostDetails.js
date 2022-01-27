import {Link} from "react-router-dom";

import css from './PostDetails.module.css';

const PostDetails = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <h2>{id}. {title}</h2>
            <p>{body}</p>
            <Link to={'comments'}><button className={css.btn_comment}>Comments</button></Link>
        </div>
    );
};

export default PostDetails;