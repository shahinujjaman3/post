import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background:'#ddd',
      margin:'30px'

    },
  }));



const PostDetails = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetails(data));

    }, []);
    const { id, title, body } = postDetails;
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <h3>This Post Number is {id}</h3>
                        <h4>{title}</h4>
                        <p>{body}</p>
                       
                    </Paper>
                </Grid>
            </Grid>
            <Comments postId={postId}></Comments>
        </div>
    );
};

export default PostDetails;