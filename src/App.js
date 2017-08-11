import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro a">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="http://www.petguide.com/blog/dog/top-10-cutest-dog-breeds/" className="links" target="_blank">CLICK ME NOW</a>
        <a href="http://www.boredpanda.com/cute-kittens/" className="d" target="_blank">NO CLICK ME</a>
      </div>
    );
  }
}

export default App;
