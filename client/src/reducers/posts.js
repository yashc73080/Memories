// Reducer is a function that takes in a state and action. Based on action, 
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; // in actions/posts.js, we are fetching all posts and storing them in payload, we can just return the action.payload here
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}