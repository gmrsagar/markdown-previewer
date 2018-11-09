import React, { Component } from 'react';
import marked from 'marked';

class Preview extends Component {
  state = {  }

  getMarkdownText = () => {
    let rawMarkup = marked(this.props.text, {sanitize: true})
    return { __html: rawMarkup }
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="p-4 m-2 preview-container" dangerouslySetInnerHTML={this.getMarkdownText() } id="preview"></div>
      </div>
    );
  }
}

export default Preview;