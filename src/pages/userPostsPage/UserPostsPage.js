import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import UserPosts from "../../components/userPosts/UserPosts";

const UserPostsPage = () => {
    const [userPosts, setUsersPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postsService.getByUserId(id).then(value => setUsersPosts([...value]))
    },[id])

    return (
        <div>
            {userPosts && <div>{userPosts.map(userPost => <UserPosts key={userPost.id} userPost={userPost}/>)}</div>}
        </div>
    );
};

export {UserPostsPage};