import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Home extends Component {
  render() {
    return (
      <div className="App wrapper">
        {/* <header className="App-header">
        </header> */}
        <div class="section-one parallax image-one fadein" />
        <div>
          hello
        </div>
        <div class="section static">
          <h1>Next Section</h1>
        </div>
      </div>
    );
  }
}

export default Home;
