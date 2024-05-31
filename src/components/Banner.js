import React from 'react';
import Button from './Button';

const Banner = ({ title, text, primaryBtnText, secondaryBtnText }) => {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="banner-buttons">
        <Button text={primaryBtnText} type="primary" />
        <Button text={secondaryBtnText} type="secondary" />
      </div>
    </div>
  );
};

export default Banner;
