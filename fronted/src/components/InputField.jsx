import React from 'react';
import './InputField.css';

const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        className="input-box"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
