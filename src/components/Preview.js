import React from 'react';
import marked from 'marked';

const Preview = ({markdown}) => {

  const parseMarkdown = () => {
    return marked(markdown)
  }

  return (
    <div className="preview">
      <div className="header">preview</div>
      <div className="area" dangerouslySetInnerHTML={{__html: marked(markdown)}} ></div>
    </div>
  )
}
export default Preview;