import React from 'react';

import logo from '../logo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="copy" className="extra-item">
        <i className="fal fa-copy"></i>
      </div>
      <div className="logo">
        <img src={logo} alt="logo markdown preview editor"/>
      </div>
      <a href="https://github.com/ayushs08/oh-hi-mark" target="_blank" rel="noopener noreferrer" className="extra-item">
        <i className="fal fa-code"></i>
      </a>
    </div>
  )
}
export default Navbar;