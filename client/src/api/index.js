import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

// Read information from backend localhost url
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost); 

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);