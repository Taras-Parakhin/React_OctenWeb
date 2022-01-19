import {Link} from "react-router-dom";

import css from './Posts.module.css';

const Posts = ({post}) => {
    const {id, title} = post;

    return (
        <div className={css.posts}>
            <Link to={id.toString()} state={post}><button>{id}. {title}</button></Link>
        </div>
    );
};

export default Posts;