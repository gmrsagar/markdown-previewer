import React, { Component } from 'react'

class Editor extends Component {

  render() {
    return (
      <div className="col-md-6 abcnone">
        <div className="m-2 editor-container">
          <textarea value={this.props.text} onChange={this.props.handleChange} id="editor" className="form-control" ></textarea>
        </div>
      </div>
    );
  }

}

export default Editor;
