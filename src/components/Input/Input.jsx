import React from "react";

function Input({ name, type }) {
  const propertyName = `${name.toLowerCase().replace(/\s/, "-")}`;

  return (
    <div>
      <div className="form-group">
        <label htmlFor={propertyName}>{name}</label>
        <input type={type} className="form-control" id={propertyName} />
      </div>
    </div>
  );
}

export default Input;
