import React from "react";

const NavLink = (props) => {
  return (
    <>
      <a
        role={"button"}
        {...(props.url ? { href: props.url } : { onClick: props.onClick })}
        className={`nav-link px-0 align-middle  text-${props.color} `}
      >
        <span className=" d-none d-sm-inline">{props.label}</span>{" "}
        {props.children}
      </a>
    </>
  );
};

NavLink.defaultProps = {
  color: "primary",
};

export default NavLink;
