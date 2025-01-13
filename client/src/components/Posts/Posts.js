import React from 'react';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/PostEntry';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts); // this word posts comes from reducers/index.js, where posts is returned
    const classes = useStyles();

    console.log(posts);

    if (!Array.isArray(posts)) {
        return <p>No posts available.</p>;
    }

    return (
        !posts.length ? <CircularProgress /> : (
            <div className={classes.container}>
                {posts.map((post) => (
                    <div key={post._id} className={classes.postItem}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    );
}

export default Posts;