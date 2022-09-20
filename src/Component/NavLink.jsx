import React from "react";

const NavLink = (props) => {
  return (
    <>
      {props.url != undefined ? (
        <a
          href={props.url}
          className={`nav-link px-0 align-middle  text-${props.color} `}
        >
          <span class=" d-none d-sm-inline">{props.label}</span>{" "}
        </a>
      ) : (
        <a
          role={"button"}
          onClick={props.onClick}
          className={`nav-link px-0 align-middle  text-${props.color} `}
        >
          <span class=" d-none d-sm-inline">{props.label}</span>{" "}
        </a>
      )}
    </>
  );
};

export default NavLink;
