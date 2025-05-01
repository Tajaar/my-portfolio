// components/Button.jsx
import React from 'react';
import '../styles/Button.css'; 
const Button = ({ label, onClick }) => {
  return (
      <button className="button" onClick={onClick}>
        <span className="button_lg">
          <span className="button_sl" />
          <span className="button_text">{label}</span>
        </span>
      </button>
  );
};
export default Button;
