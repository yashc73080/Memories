import React from 'react';
import { useSelector } from 'react-redux';


import Post from './Post/PostEntry';

import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts); // this word posts comes from reducers/index.js, where posts is returned
    const classes = useStyles();

    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;