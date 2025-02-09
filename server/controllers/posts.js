// controllers/posts.js: all the logic for the routes

import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

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

    const newPost = new PostMessage({ ...post, createdAt: new Date().toISOString() });

    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params; // renames id to _id
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndDelete(id);

    console.log('DELETE');

    res.json({ message: 'Post deleted successfully' });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    res.json(updatedPost);
}