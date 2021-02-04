import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <NavLink to="/">TheMealDB</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
