import React from "react";

function Select({ name, options }) {
  const propertyName = `${name.toLowerCase().replace(/\s/, "-")}`;
  return (
    <div>
      <label htmlFor={propertyName}>{name}</label>
      <select className="custom-select" id={propertyName}>
        <option>Choose One</option>
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
