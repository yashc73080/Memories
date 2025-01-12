// controllers/posts.js: all the logic for the routes

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); // find takes time so its asynchronous so, we use await and async

        console.log(postMessages);

        res.status(200).json(postMessages); // 200 is the status code for success
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}
// (req, res) is specified callback function that is executed once user visits this route

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}