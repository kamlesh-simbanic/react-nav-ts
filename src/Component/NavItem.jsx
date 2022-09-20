import React from "react";
import NavLink from "./NavLink";

const NavItem = (props) => {
  return (
    <li className="nav-item ">
      {/* <NavLink {...props} /> */}
      {props?.children}
    </li>
  );
};

export default NavItem;
