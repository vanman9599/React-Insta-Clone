import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
    posts: []
    }
  }
  componentDidMount(){
    this.setState({ posts: dummyData });
  }
  render(){
  return (
    <div className="App">
     <SearchBar />
      {this.state.posts.map(post => {
        return <PostContainer key={post.timestamp} post={post} />

      })}
    </div>
  );
  }
}

export default App;
