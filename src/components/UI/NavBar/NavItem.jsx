import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./NavItem.module.css";

const NavItem = (props) => {
  const [state, setState] = useState("default");
  const location = useLocation();
  const active = location.pathname === props.destPath;
  useEffect(() => {
    if (active && !props.dropElement) {
      setState("active");
      // //console.log('active')
    } else {
      setState("default");
      if (props.inverseHover) setState("hover");
      // //console.log('defualt')
    }
    // //console.log("EFFECT RUNNING");
  }, [active, props.dropElement, props.inverseHover]);
  const handleMouseEnter = () => {
    if (!active || props.dropElement) {
      setState("hover");
      if (props.inverseHover) setState("default");
    }
  };

  const handleChangeRoute = () => {
    setState("default");
    if (props.inverseHover) setState("hover");
  };

  const handleMouseLeave = () => {
    if (!active || props.dropElement) {
      setState("default");
      if (props.inverseHover) setState("hover");
    }
  };

  // //console.log("Rendering")
  // Figure out why it renders an extra time
  return (
    <li
      className={`${classes["nav-item"]} ${classes[state]} ${
        props.inverseHover ? classes["inverse-hover"] : ""
      } ${props.className || ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleChangeRoute}
    >
      <Link to={props.destPath}>{props.children}</Link>
    </li>
  );
};

export default NavItem;
