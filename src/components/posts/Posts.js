import {Link} from "react-router-dom";

import css from './Posts.module.css';

const Posts = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <Link to={id.toString()} state={post}><button className={css.btn_post}>{id}. {title}</button></Link>
        </div>
    );
};

export default Posts;