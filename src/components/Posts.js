const Posts = ({post: {id, title, body}, getPosts}) => {
    return (
        <div className='post'>
            <h3>{id}. {title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Posts;