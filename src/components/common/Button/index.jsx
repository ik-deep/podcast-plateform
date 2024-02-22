import React from 'react';
import "./styles.css";

const Button = ({text, onClick,disabled}) => {
  return (
    <div onClick={onClick} className='custom-btn' disabled={disabled}>{text}
    </div>
  )
}

export default Button