import React from 'react';
import Post from './Post';

function PostContainer(props){
return(
    <div className="post-container">
        <h1>{props.post.username}</h1>
        <img src={props.post.imageUrl}/>
    </div>
)

}

export default PostContainer;