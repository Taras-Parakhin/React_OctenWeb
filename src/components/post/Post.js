import {Link, Outlet, useNavigate} from "react-router-dom";

import css from './Post.module.css';

const Post = ({post}) => {
    const {id, userId, title, body} = post;
    const navigate = useNavigate();

    const toComments = () => {
        navigate(`/posts/${id}/comments`)
    }

    return (
        <div className={css.wrap}>
            <div>UserId: {userId}</div>
            <h3>{id}. {title}</h3>
            <p>{body}</p>
            <Link to={id}><button onClick={toComments}>Comments</button></Link>
            <div className={css.outlet}><Outlet/></div>
        </div>
    );
};

export default Post;