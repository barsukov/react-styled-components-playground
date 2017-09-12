import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StyledButtons from './containers/styledButtons'
import Donut from './components/Donut'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Styled componets playground</h2>
        </div>
        <p className="App-intro">
          <StyledButtons />
          <Donut />
        </p>
      </div>
    );
  }
}

export default App;
