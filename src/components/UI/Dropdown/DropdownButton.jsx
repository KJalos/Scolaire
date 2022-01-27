import React, { useContext, useEffect, useRef, useState } from "react";
import MenuContext from "../../../store/menu-context";
import classes from "./DropdownButton.module.css";
import profileBtnClasses from "./ProfileButton.module.css";

const DropDownButton = (props) => {
  // const { show: showMenu } = useContext(MenuContext);
  const [eventAdded, setEventAdded] = useState(false);
  const ref = useRef();
  const menuCtx = useContext(MenuContext);
  const { hide } = menuCtx;
  useEffect(() => {
    const listener = (event) => {
      if (event.target !== ref.current) {
        hide(props.menuId);
      }
    };
    if (!eventAdded) {
      setEventAdded(true);
      document.addEventListener("click", listener);
    }
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [eventAdded, hide, props.menuId]);

  const handleClick = () => {
    menuCtx.hide(props.menuId);
    const menu = menuCtx.menus.find((menu) => menu.id === props.menuId);
    if (menu.visible) {
      menuCtx.hide(menu.id);
    } else {
      menuCtx.show(menu.id, {
        right:
          ref.current.getBoundingClientRect().right - ref.current.offsetWidth,
        top: ref.current.getBoundingClientRect().bottom + 20,
      });
    }
  };

  return (
    <>
      {props.profile ? (
        <span
          onClick={handleClick}
          className={`${profileBtnClasses["profile-button"]} ${
            menuCtx.menus.find((menu) => menu.id === props.menuId)
              ? profileBtnClasses.hover
              : ""
          } fas fa-user-circle`}
          ref={ref}
          id={props.id}
        ></span>
      ) : (
        <button
          onClick={handleClick}
          className={`${classes["drop-btn"]} ${props.className}`}
          ref={ref}
        >
          {props.children}
        </button>
      )}
    </>
  );
};

export default DropDownButton;
