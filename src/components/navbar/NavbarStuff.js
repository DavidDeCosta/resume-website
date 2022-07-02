import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: grey;
  height: 50px;
  text-align: right;
  justify-content: space-between;
  padding:10px;
  position: sticky;
  top: 0;
  z-index: 999;
`;
  
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding:10px;
  cursor: pointer;
  &.active {
    color: blue;
  }
`;
