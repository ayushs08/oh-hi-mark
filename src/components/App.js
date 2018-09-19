import React, { Component } from 'react';

import './app.css';
import Navbar from './Navbar';
import Editor from './Editor';
import Preview from './Preview';

const template = "# oh-hi-mark\n\n" +
"React based markdown editor built as part of the FreeCodeCamp Frontend Libraries Certification program.\n\n" +
"### Demo\n\n" +
"http://ayushs08.github.io/oh-hi-mark\n\n" +
"### Dependencies\n\n" +
"* [react] - An npm package to get you immediate access to React.\n\n" +
"* [react-dom] - This package serves as the entry point of the DOM-related rendering paths.\n\n" +
"### Installation\n\n" +
"Clone the repo:\n\n" +
"```sh\n" +
"git clone https://github.com/ayushs08/oh-hi-mark.git" +
"```\n\n" +
"Install the dependencies and run the server:\n\n" +
"```sh\n" +
"cd oh-hi-mark\n" +
"npm install\n" +
"npm start\n" +
"```\n\n" +
"### License\n\n" +
"MIT\n\n" +
"[react]: <https://www.npmjs.com/package/react>\n\n" +
"[react-dom]: <https://www.npmjs.com/package/react-dom>"

class App extends Component {

  state = {
    markdown: template
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
