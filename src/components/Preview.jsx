import React, { Component } from 'react';
import marked from 'marked';

class Preview extends Component {

  getMarkdownText = () => {
    let rawMarkup = marked(this.props.text, {sanitize: true})
    return { __html: rawMarkup }
  }

  render() {
    return (
      
        <div className="p-4" dangerouslySetInnerHTML={this.getMarkdownText() } id="preview"></div>
      
    );
  }
}

export default Preview;