import React from 'react'

class CommentForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <form onSubmit={this.props.addNewComment}>
             <input type="text"
              placeholder="Add Comment..."
              onChange={this.props.handleChanges}
               />
             <button type="submit">Add</button>
           </form>
            
        )
    }
}

export default CommentForm;