import { useContext, useEffect } from "react";
import MenuContext from "../../../store/menu-context";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  const menuCtx = useContext(MenuContext);
  const menu = menuCtx.menus.find((menu) => menu.id === props.id);
  console.log(menu);
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  useEffect(() => {
    if (menu.visible) {
      const menuElement = document.getElementById(menu.id);
      console.log(menuElement);
      if (menu.position) {
        if (menu.position.left) {
          menuElement.style.setProperty(
            "--position-right",
            (menu.position.left / window.innerWidth) * 100 + "%"
          );
        } else if (menu.position.right) {
          menuElement.style.setProperty(
            "--position-left",
            (menu.position.right / window.innerWidth) * 100 + "%"
          );
        } else {
          menuElement.style.setProperty("--position-left", 0);
        }
        if (menu.position.top) {
          menuElement.style.setProperty(
            "--position-top",
            (menu.position.top / window.innerHeight) * 100 + "%"
          );
        } else if (menu.position.bottom) {
          menuElement.style.setProperty(
            "--position-bottom",
            (menu.position.bottom / window.innerHeight) * 100 + "%"
          );
        } else {
          menuElement.style.setProperty("--position-top", 0);
        }
      } else {
        menuElement.style.setProperty("--position-left", 0);
        menuElement.style.setProperty("--position-top", 0);
      }
    }
  }, [menu]);
  return (
    <div id={props.id} className={`${classes.dropdown} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Dropdown;
