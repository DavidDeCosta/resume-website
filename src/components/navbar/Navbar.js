import React from "react";
import { Nav, NavLink} 
    from "./NavbarStuff";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
            Resume
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/resume" activeStyle>
            Home
          </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;