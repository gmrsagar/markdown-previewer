import React, { Component } from 'react'

class Editor extends Component {

  render() {
    return (

          <textarea className="p-4" value={this.props.text} onChange={this.props.handleChange} id="editor" ></textarea>
      
    );
  }

}

export default Editor;
