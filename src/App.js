import React, { Component } from 'react';
import './App.css';
import CanvasContainer from './containers/CanvasContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CanvasContainer />
      </div>
    );
  }
}

export default App;
