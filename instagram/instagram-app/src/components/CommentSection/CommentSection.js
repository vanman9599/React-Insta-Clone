import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

function CommentSection(props){
    return(
        <div className="comment-section">
            {props.comments.map(comment=>{
               return <Comment comment={comment} />
            })}
        </div>
    )
    
    }
    
    export default CommentSection;