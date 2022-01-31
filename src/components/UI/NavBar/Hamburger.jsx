import { useContext } from "react";
import MenuContext from "../../../store/menu-context";
import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  const menu = useContext(MenuContext).menus.find(
    (menu) => menu.id === props.menuId
  )
  let isOpen = false;
  if (menu && menu.visible) {
    isOpen = menu.visible;
  }

  return (
    <span
      className={`${classes.hamburger} ${isOpen ? classes.open : ""} ${
        props.className
      }`}
    >
      <span className={classes.bar} />
      <span className={classes.bar} />
      <span className={classes.bar} />
    </span>
  );
};

export default Hamburger;
