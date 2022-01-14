import './User.css';

const User = ({user: {id, name}, getUser}) => {

    return (
        <div className='user'>
            <button onClick={()=>getUser(id)}>{id}. {name}</button>
        </div>
    )
}

export default User;