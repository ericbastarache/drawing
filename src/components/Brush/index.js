import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBrush = styled.button`
  color: #fff;
`;

const Brush = props => {
  const { children, ...rest } = props;
  return (
    <StyledBrush {...rest}>
      {children}
    </StyledBrush>
  );
}

Brush.propTypes = {
  children: PropTypes.node,
};

export default Brush;