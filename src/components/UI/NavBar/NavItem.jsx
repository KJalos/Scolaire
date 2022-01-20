import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./NavItem.module.css";

const NavItem = (props) => {
  const [state, setState] = useState("default");

  const {active} = props;
  useEffect(()=>{
    if (active) {
      setState('active');
      // console.log('active')
    }
    else {
      setState('default');
      // console.log('defualt')
    }
  },[active]);
  const handleMouseEnter = () => {
    if (!active) setState("hover");
  };

  const handleChangeRoute = () => {
    setState('default');
    props.onChangeRoute(props.destPath)
  }

  const handleMouseLeave = () => {
    if (!active) setState("default");
  };

  // console.log("Rendering")
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
      <Link to={props.destPath} >{props.children}</Link>
    </li>
  );
};

export default NavItem;
