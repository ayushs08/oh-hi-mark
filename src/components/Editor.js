import React from 'react';

const Editor = ({value, handleMarkdown}) => {
  return (
    <div className="editor">
      <div className="header">editor</div>
      <div className="area">
        <textarea name="editor__area" id="editor__area" value={value} onChange={event => handleMarkdown(event)} />
      </div>
    </div>
  )
}
export default Editor;