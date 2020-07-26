import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="topbar">
            <div className="topbar-logo">
              <img src="" alt=""/>
            </div>
            <div className="topbar-nav">
              <ul className="topbar-nav__list">
                <li className="topbar-nav__item">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="topbar-nav__item">
                  <Link to="/">User</Link>
                </li>
                <li className="topbar-nav__item">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header;