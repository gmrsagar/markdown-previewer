import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

class App extends Component {

  state = {
    mdInput: '# MarkDown Parser \n ## Built With React \n https://www.google.com \n\n `<div></div>` \n\n ```function = () => {}``` \n\n **List item 1**  \n\n  >Quote items are very handy  \n\n  ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")  \n\n  **Bold text here**'
  }

  handleChange = e => {
    this.setState({
      mdInput: e.target.value
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Editor text={this.state.mdInput} handleChange={this.handleChange}/>
          <Preview text={this.state.mdInput}/>
        </div>
      </div>
    );
  }
}

export default App;
