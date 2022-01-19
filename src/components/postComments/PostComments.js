const PostComments = ({postComment}) => {
    const {id, name, email, body} = postComment;

    return (
        <div>
            <h3>{id}. {name}</h3>
            <div>{email}</div>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default PostComments;