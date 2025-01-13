import * as api from '../api';

// Action Creators - functions that return actions (another function)
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); // get response from api and store it in data object (which represents the posts)

        dispatch({ type: 'FETCH_ALL', payload: data }); // action is just an object with type and payload
        // with redux thunk, since we are using asynchronous data, we can dispatch an action after the data is fetched
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}