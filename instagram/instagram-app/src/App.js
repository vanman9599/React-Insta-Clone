import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }
 
  render(){
  return (
    <div className="App">
     
    </div>
  );
  }
}

export default App;
