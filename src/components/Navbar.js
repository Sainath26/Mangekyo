import React, { Component } from 'react';
import Identicon from 'identicon.js';
import dvideo from '../dvideo.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/Sainath26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dvideo} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp;Mangekyō
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account"><b className="text-white"> {this.props.account}</b> </small>
            </small>
              { this.props.account
              ? <img
              className = 'ml-2'
              width = '30'
              height = '30'
              src= {'data:image/png;base64, ${new Identicon(this.props.account,30).toString()}'}
              src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              alt=""
              />
              :<span></span>

              }
              
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;