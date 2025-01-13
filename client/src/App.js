import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid2 } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

import useStyles from './styles';

const theme = createTheme();

const App = () => {
    const [currentId, setCurrentId] = useState(null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container maxwidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <div className={classes.brandContainer}>
                        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                        <img className={classes.image} src={memories} alt="memories" height="60" />
                    </div>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid2 className={classes.mainContainer}>
                            <Grid2 style={{ flex: '1' }}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid2>
                            <Grid2 style={{ width: '380px' }}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid2>
                        </Grid2>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    );
}

export default App;