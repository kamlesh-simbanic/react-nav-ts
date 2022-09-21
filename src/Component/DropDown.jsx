import React, { useState } from "react";
import NavLink from "./NavLink";

const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-caret-up-fill"
      viewBox="0 0 16 16"
    >
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-caret-down-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
};

const Dropdown = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="btn-group">
        <NavLink
          label={props.label}
          color={props.color}
          // onClick={() => setShow(!show)}
        ></NavLink>
        <button
          type="button"
          class={`float-end text-${props.color} btn  btn-light bg-dark border-0`}
          onClick={() => setShow(!show)}
        >
          {show ? <ArrowUp /> : <ArrowDown />}
        </button>
      </section>
      <ul className={`${show ? "show" : ""}   collapse  nav flex-column ms-2`}>
        {props.children}
      </ul>
    </>
  );
};

Dropdown.defaultProps = {
  color: "white",
};

export default Dropdown;
