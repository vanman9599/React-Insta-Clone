import React from 'react';
import './comment.css';
import PropTypes from 'prop-types';

function Comment(props){
    return(
        <div className="comment">
            <p><strong class="username">{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
    
    }
    
    Comment.propTypes = {
        comment: PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      };
    export default Comment;