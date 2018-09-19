import React, { Component } from 'react';

import './app.css';
import Navbar from './Navbar';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {

  state = {
    markdown: ""
  }

  render() {

    const handleMarkdown = event => {
      this.setState({markdown: event.target.value})
    }

    return (
      <div className="app">
        <Navbar />
        <div className="wrapper">
          <Editor value={this.state.markdown} handleMarkdown={handleMarkdown} />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    )
  }
}

export default App;
