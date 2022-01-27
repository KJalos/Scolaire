import React, { useContext, useEffect, useRef, useState } from "react";
import MenuContext from "../../../store/menu-context";
import classes from "./DropdownButton.module.css";
import profileBtnClasses from "./ProfileButton.module.css";

const DropDownButton = (props) => {
  // const { show: showMenu } = useContext(MenuContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [eventAdded, setEventAdded] = useState(false);
  const ref = useRef();
  const menuCtx = useContext(MenuContext);

  useEffect(() => {
    const listener = (event) => {
      if (event.target !== ref.current) {
        setDropdownVisible(() => {
          return false;
        });
      }
    };
    if (!eventAdded) {
      setEventAdded(true);
      document.addEventListener("click", listener);
    }
    return () => {
      document.removeEventListener("click");
    };
  }, [dropdownVisible, eventAdded]);

  const handleClick = () => {
    setDropdownVisible((curState) => !curState);
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
            dropdownVisible ? profileBtnClasses.hover : ""
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
