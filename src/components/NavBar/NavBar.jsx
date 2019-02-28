import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <FontAwesomeIcon className="mr-1" icon="utensils" />
        Food App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/orders">
              Order
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
