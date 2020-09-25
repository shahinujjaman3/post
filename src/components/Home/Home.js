import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Home = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]);
    const style={
        textAlign:'center'
    }

    return (
        <div className={classes.root}>
            <h1 style={style}>Total Post Here</h1>
            <Grid container xs={12} spacing={4}>
                {
                    posts.map((post,key) => <Post key={key} post = {post}></Post>)
                }
            </Grid>
        </div>
    );
};

export default Home;