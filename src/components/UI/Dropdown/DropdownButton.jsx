import React, { useContext, useEffect, useRef } from "react";
import MenuContext from "../../../store/menu-context";
import UserAvatar from "../../Profile/UserAvatar";
import classes from "./DropdownButton.module.css";
import profileBtnClasses from "./ProfileButton.module.css";

let eventAdded = false;

const DropDownButton = (props) => {
  // const { show: showMenu } = useContext(MenuContext);
  const ref = useRef();
  const menuCtx = useContext(MenuContext);
  const { hideAll } = menuCtx;
  useEffect(() => {
    const listener = (event) => {
      if (event.target !== ref.current) {
        console.log("Clicked outside");
        hideAll();
      }
    };
    if (!eventAdded) {
      eventAdded = true;
      document.addEventListener("click", listener);
    }
    return () => {
      document.removeEventListener("click", listener);
      eventAdded = false;
    };
  }, [hideAll]);

  const handleClick = () => {
    menuCtx.hide(props.menuId);
    const menu = menuCtx.menus.find((menu) => menu.id === props.menuId);
    if (menu.visible) {
      menuCtx.hide(menu.id);
    } else {
      menuCtx.show(menu.id, {
        right:
          ref.current.getBoundingClientRect().right - ref.current.offsetWidth,
        top: ref.current.getBoundingClientRect().bottom + 5,
      });
    }
  };

  return (
    <button
      onClick={!props.profile && handleClick}
      className={`${classes["drop-btn"]} ${
        props.profile ? profileBtnClasses["profile-btn"] : ""
      } ${props.className}`}
      ref={ref}
    >
      {props.profile ? (
        <UserAvatar onClick={handleClick} ref={ref} />
      ) : (
        props.children
      )}
    </button>
  );
};

export default DropDownButton;
