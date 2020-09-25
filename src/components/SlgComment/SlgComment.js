import React from 'react';
import '../SlgComment/SlgComment.css'

const SlgComment = (props) => {
    const {email,body} = props.comment;
    console.log(props);
    const style = {
        border: '1px solid blue'
    }
    return (
        <div className='comment'>
            <h6>Email : {email}</h6>
            <p>Comment</p>
            <p className='para'>{body}</p>
        </div>
    );
};

export default SlgComment;