import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StyledButtons from './containers/styledButtons'
import Donut from './components/Donut'
import DonutRecharts from './components/RechartDonut'

import Animate from 'react-smooth'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Styled componets playground</h2>
        </div>
        <DonutRecharts value={35}/>
      </div>
    );
  }
}

export default App;
