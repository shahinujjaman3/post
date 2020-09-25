import React, { useEffect, useState } from 'react';
import SlgComment from '../SlgComment/SlgComment';

const Comments = (props) => {
    console.log(props);
    const id = props.postId;
   const [comments, setComments] = useState([]);
   useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
   },[])
    return (
        <>
            <h2>Comments </h2>
            {
            comments.map(comment => <SlgComment comment={comment}></SlgComment>)
            }
        </>
    );
};

export default Comments;