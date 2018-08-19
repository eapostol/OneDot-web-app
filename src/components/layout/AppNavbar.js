import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
  render() {
    return (<nav className="nav navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">
          ClientPanel
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
          <span classNmae="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Dashbored
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
  }
}

export default AppNavbar
