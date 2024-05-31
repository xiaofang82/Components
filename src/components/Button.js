import React from 'react';

const Button = ({ text, type }) => {
  return (
    <button className={`button ${type}`}>
      {text}
    </button>
  );
};

export default Button;
