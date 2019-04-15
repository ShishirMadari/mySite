import React, { Component } from 'react';
import Header from './components/header/header';

import './App.css';

/**
 * @title : Home Page
 * @desc  : This is the component file that manages the elements
 *          displayed on the home page of the site
 */

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App wrapper fadein">
          <div className="section-one">
            <div className="grid-container">
              <div className="image-one parallax" />
              <div className="text">
                hello
              </div>
            </div>
          </div>
          <div className="section-two">
            <div className="grid-container">
              <div className="text">
                Next Section
              </div>
            </div>
            <div class="section static">
              <h1>Next Section</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
