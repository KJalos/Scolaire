import { useContext, useEffect, useState } from "react";
import MenuContext from "../../../store/menu-context";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  const menuCtx = useContext(MenuContext);
  const menu = menuCtx.menus.find((menu) => menu.id === props.id);
  const [height,setHeight] = useState(window.innerHeight);
  const [width,setWidth] = useState(document.getElementById("root").clientWidth);

  useEffect(()=>{
    const handleResize = () => {

    }

    window.addEventListener("resize",handleResize);
    return ()=>{

    }
  },[]);

  useEffect(() => {
    if (menu.visible) {
      const menuElement = document.getElementById(menu.id);
      if (menu.position) {
        if (menu.position.left) {
          menuElement.style.setProperty(
            "--position-left",
            (menu.position.left / width) *
              100 +
              "%"
          );
        } else if (menu.position.right) {
          menuElement.style.setProperty(
            "--position-right",
            100 -
              (menu.position.right /
                width) *
                100 +
              "%"
          );
        }
        if (menu.position.top) {
          menuElement.style.setProperty(
            "--position-top",
            (menu.position.top / height) *
              100 +
              "%"
          );
        } else if (menu.position.bottom) {
          menuElement.style.setProperty(
            "--position-bottom",
            (menu.position.bottom /
              height) *
              100 +
              "%"
          );
        }
      }
    }
  }, [height, menu.id, menu.position, menu.visible, width]);
  return (
    <div id={props.id} className={`${classes.dropdown} ${props.className || ''}`}>
      {props.children}
    </div>
  );
};

export default Dropdown;
