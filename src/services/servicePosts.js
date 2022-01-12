const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}

const getPost = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts' + id)
        .then(value => value.json())
}

export {getPosts, getPost}