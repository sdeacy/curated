import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Films from './components/Films/Films';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Films />
      </div>
    );
  }
}

export default App;


// 1. get list of films on netflix ireland
// 2. get info from rt for each film
//  2a. if above a certain score then add to a list
// 3. get info from imdb
// 4. show the list

