import React, { Component } from 'react';

import './app.css';
import Navbar from './Navbar';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="wrapper">
          <Editor />
          <Preview />
        </div>
      </div>
    )
  }
}

export default App;
