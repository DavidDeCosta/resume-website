import React from "react";
import { Nav, NavLink} 
    from "./NavbarStuff";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/resume" activeStyle>
            Resume
          </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;