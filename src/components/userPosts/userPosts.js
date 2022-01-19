const UserPosts = ({userPost}) => {
    const {title, body} = userPost;

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default UserPosts;