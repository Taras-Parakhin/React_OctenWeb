const UserPosts = ({userPost}) => {
    const {id, title, body} = userPost;

    return (
        <>
            <h3>{id}. {title}</h3>
            <p>{body}</p>
            <hr/>
        </>
    );
};

export default UserPosts;