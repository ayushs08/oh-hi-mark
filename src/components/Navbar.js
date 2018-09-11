import React from 'react';

import logo from '../logo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo markdown preview editor"/>
      </div>
      <div className="extra">
        <div className="copy" className="extra-item">
          <i className="fal fa-copy"></i>
        </div>
        <a href="https://github.com/ayushs08/oh-hi-mark" target="_blank" rel="noopener noreferrer" className="extra-item">
          <i className="fal fa-code"></i>
        </a>
      </div>
    </div>
  )
}
export default Navbar;