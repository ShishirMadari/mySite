import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <h1 className="name">
                        shishir<span className="dot">.</span>
                    </h1>
                    <div className="nav-bar center-vertical">
                        <button>about me</button>
                        <button>resume</button>
                        <button>contact</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
