import React from "react";

function Input({ name, type, handleChange }) {
  const propertyName = `${name.toLowerCase().replace(/\s/, "-")}`;
  const camelCasedName = propertyName.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase();
  });

  return (
    <div>
      <div className="form-group">
        <label htmlFor={propertyName}>{name}</label>
        <input
          onChange={handleChange}
          type={type}
          className="form-control"
          id={propertyName}
          name={camelCasedName}
        />
      </div>
    </div>
  );
}

export default Input;
