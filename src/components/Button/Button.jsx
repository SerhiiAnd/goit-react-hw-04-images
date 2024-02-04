import React from 'react';
import css from 'components/Button/Button.module.css';

const Button = ({ onClick, children }) => {
  return (
    <button type="button" className={css.buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
