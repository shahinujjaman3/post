import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Post/Post.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      background:'#ddd',
      marginLeft:'30px'
    },
  }));


const Post = (props) => {
    const classes = useStyles();
   const {id, title}=props.post;
    return (
          <Grid item xs={6}>
            <Paper className={classes.paper}>
          
                <h4>Post Number is  {id}</h4>
                <h6>{title}</h6>
                <Button  variant="contained" color="secondary"><Link className='btn' to={`/post/${id}`}>See More</Link></Button>
                
            </Paper>
          </Grid>
    );
};

export default Post;