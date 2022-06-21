import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius}) => {
  return(
      <Button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}>Button</Button>
  )
}

export default Button;