import React, { useState } from "react";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

const Dropdown = (props) => {
  const [show, setShow] = useState(true);
  console.log(props);
  return (
    <>
      <NavLink
        label={props.label}
        color="white"
        onClick={() => setShow(!show)}
      />
      <ul className={`${show ? "show" : ""}  collapse  nav flex-column ms-2`}>
        {props.children}
      </ul>
    </>
  );
};

export default Dropdown;
