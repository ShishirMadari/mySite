import React, { Component } from 'react';
import Header from './components/header/header';

import './App.css';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App wrapper">
          <div className="section-one parallax image-one fadein" />
          <div className="text">
            hello
            </div>
          <div class="section static">
            <h1>Next Section</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;