import React from "react";
import NavLink from "./NavLink";

const NavItem = (props) => {
  return <li className="nav-item ">{props?.children}</li>;
};

export default NavItem;
