import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         comments: this.props.comments,
         comment: ''
            
        };
    } 
    addNewComment = (event, index) => {
        event.preventDefault();
        this.setState({
          comments: [
              ...this.state.comments,
              {username: 'van', text: this.state.comment}
          ], 
          comment: ''
        });
        console.log("comments in state ", this.state);
        // this.state.comments.push(this.state.comment);
    
      }
    handleChanges = event =>{
        event.preventDefault();
        this.setState({comment: event.target.value});
     }
     
       render(){
           console.log('comment section props', this.props);
            return(
                <div>
                    <div className="comment-section">
                    {this.state.comments.map(comment=>{
                    return <Comment comment={comment} />
                    })}
                  state   
                   </div>
                   <div>
                        <form onSubmit={this.addNewComment}>
                        <input type="text" name="text"
                        placeholder="Add Comment..."
                        onChange={this.handleChanges}
                        value={this.state.comment}
                        />
                        <button type="submit">Add</button>
                        </form>
                   </div>
                </div>
                
                )
            }
    
    
}
    
    export default CommentSection;