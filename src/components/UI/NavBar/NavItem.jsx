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
      // //console.log('defualt')
    }
    // //console.log("EFFECT RUNNING");
  }, [active]);
  const handleMouseEnter = () => {
    if (!active || props.dropElement) setState("hover");
  };

  const handleChangeRoute = () => {
    setState("default");
  };

  const handleMouseLeave = () => {
    if (!active || props.dropElement) setState("default");
  };

  // //console.log("Rendering")
  // Figure out why it renders an extra time
  return (
    <li
      className={`${classes["nav-item"]} ${classes[state]} ${
        props.className || ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleChangeRoute}
    >
      <Link to={props.destPath}>{props.children}</Link>
    </li>
  );
};

export default NavItem;
