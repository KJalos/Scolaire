import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./NavItem.module.css";

const NavItem = (props) => {
  const [state, setState] = useState("default");

  if (props.active) {
    setState("active");
  }

  const handleMouseEnter = () => {
    if (state !== "active") setState("hover");
  };

  const handleMouseLeave = () => {
    setState("default");
  };

  return (
    <li
      className={`${classes["nav-item"]} ${classes[state]} ${
        props.className || ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={props.destPath}>{props.children}</Link>
    </li>
  );
};

export default NavItem;
