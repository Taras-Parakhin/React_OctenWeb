import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"

import {postsService} from "../../services/posts.service";
import UserPosts from "../../components/userPosts/userPosts";

const UserPostsPage = () => {
    const [userPosts, setUserPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postsService.getByUserId(id).then(value => setUserPosts([...value]))
    },[id])

    return (
        <div>
            {userPosts && (<div>{userPosts.map(userPost => <UserPosts key={userPost.id} userPost={userPost}/>)}</div>)}
        </div>
    );
};

export default UserPostsPage;