import React from 'react';


const Button = ({ text, type }) => {
  return (
    <button type={type} className="button-primary">
      {text}
    </button>
  );
};

export default Button;
