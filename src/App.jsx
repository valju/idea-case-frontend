import React, { Component } from 'react';
import './App.css';
import Navigator from './router/Navigator';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Navigator />
      </div>
    );
  }
}

export default App;
