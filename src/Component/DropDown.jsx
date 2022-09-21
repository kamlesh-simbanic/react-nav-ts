import React, { useState } from "react";
import NavLink from "./NavLink";

const Dropdown = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <NavLink
        label={props.label}
        color={props.color}
        onClick={() => setShow(!show)}
      />
      <ul className={`${show ? "show" : ""}  collapse  nav flex-column ms-2`}>
        {props.children}
      </ul>
    </>
  );
};

Dropdown.defaultProps = {
  color: "white",
};

export default Dropdown;
