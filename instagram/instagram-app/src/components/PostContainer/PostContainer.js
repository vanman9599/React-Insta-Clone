import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


function PostContainer(props){
return(
    <div className="post-container">
            <img width="25px" src={props.post.thumbnailUrl} alt={props.post.username} /> {props.post.username}<br />
        <img width="500px" src={props.post.imageUrl} alt="image" />
        <CommentSection comments={props.post.comments} />
    </div>
    
)

}
PostContainer.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };

export default PostContainer;