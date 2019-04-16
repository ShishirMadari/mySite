import React, { Component } from 'react';
import Header from '../../components/header/Header';

// sections
import SectionOne from './sections/SectionOne';

import './../../App.css';

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
          <SectionOne />
          <div className="section-two">
            <div className="section-grid-container">
              <div className="text">
                Next Section
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Home;
