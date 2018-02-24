import React from 'react';
import PropTypes from 'prop-types';

const Canvas = props => {
  const { name, children, ...rest } = props;
  return (
    <div>
      <h1>Hello World</h1>
      <canvas
          name={name}
      {...rest}
      >
      {children}
      </canvas>
    </div>
    
  );
}

Canvas.propTypes = {
  children: PropTypes.node,
}

export default Canvas;