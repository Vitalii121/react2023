const baseURL = 'https://jsonplaceholder.typicode.com';


const users = '/users';
const posts = '/posts';
const comments = '/comments';


const urls = {
    users: {
        base: users,
        getById: (id) => `${users}/${id}`
    },
    posts: {
        base: posts,
        getById: (id) => `${posts}/${id}`
    },
    comments
}


export {
    baseURL,
    urls
}