import React from 'react';

const Preview = ({markdown}) => {
  return (
    <div className="preview">
      <div className="header">preview</div>
      <div className="area">
        {markdown}
      </div>
    </div>
  )
}
export default Preview;