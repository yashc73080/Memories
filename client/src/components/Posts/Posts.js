import React from 'react';
import { Grid2, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/PostEntry';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts); // this word posts comes from reducers/index.js, where posts is returned
    const classes = useStyles();

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid2 className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid2 key={post._id} item="true" xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid2>
                ))}
            </Grid2>
        )
    );
}

export default Posts;