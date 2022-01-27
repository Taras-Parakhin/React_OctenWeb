const Comments = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div>
            <h3>{id}. {name}</h3>
            <div>{email}</div>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default Comments;