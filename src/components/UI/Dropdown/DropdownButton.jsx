import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MenuContext from "../../../store/menu-context";
import UserAvatar from "../../Profile/UserAvatar";
import classes from "./DropdownButton.module.css";
import profileBtnClasses from "./ProfileButton.module.css";

const DropDownButton = (props) => {
  // const { show: showMenu } = useContext(MenuContext);
  const ref = useRef();
  const profileBtnRef = useRef();
  const menuCtx = useContext(MenuContext);
  const { whitelistElementRec, show, hideAll, cleanupMenu, setPosition } =
    menuCtx;
  const menu = menuCtx.menus.find((menu) => menu.id === props.menuId);
  // //console.log(menu);
  // //console.log(props.menuId);
  const [elementsWhitelisted, setElementsWhitelisted] = useState(false);
  const [nestedElementsWhitelisted, setNestedElementsWhitelisted] =
    useState(false);
  // console.log("Parent", props.parentDropdownId);
  // console.log("Button", ref.current);
  const { profile: isProfileBtn, parentDropdownId } = props;

  const menuInitialized = menu !== undefined;

  const handleClick =
    menu &&
    function () {
      if (menu.visible) {
        hideAll(menu.id);
      } else {
        // eg top of drop to bottom of button => bottom-top
        show(menu.id);
      }
    };

  useEffect(() => {
    const updateSize = () => {
      if (menuInitialized) {
        hideAll();
        setPosition(props.menuId, {
          left:
            ref.current.getBoundingClientRect().left +
            props.dropdownOffset.left,
          right:
            ref.current.getBoundingClientRect().right +
            props.dropdownOffset.right,
          top:
            ref.current.getBoundingClientRect().bottom +
            props.dropdownOffset.top,
          bottom:
            ref.current.getBoundingClientRect().bottom +
            props.dropdownOffset.bottom,
        });
      }
    };

    const timeout = setTimeout(() => {
      window.addEventListener("resize", updateSize);
      updateSize();
    }, 500);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateSize);
    };
  }, [
    hideAll,
    menuInitialized,
    props.dropdownOffset.bottom,
    props.dropdownOffset.left,
    props.dropdownOffset.right,
    props.dropdownOffset.top,
    props.menuId,
    setPosition,
  ]);

  useEffect(() => {
    if (!elementsWhitelisted && menuInitialized) {
      if (ref.current) {
        whitelistElementRec(props.menuId, ref.current);
      }
      setElementsWhitelisted(true);
    }

    if (!nestedElementsWhitelisted) {
      if (ref.current) {
        if (parentDropdownId) {
          // console.log("Parent", parentDropdownId);
          // console.log(ref.current);
          whitelistElementRec(parentDropdownId, ref.current);
        }
        setNestedElementsWhitelisted(true);
      }
    }

    return () => {
      if (elementsWhitelisted) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cleanupMenu(props.menuId);
        if (parentDropdownId) {
          // console.log("Parent", parentDropdownId);
          // console.log(ref.current);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          cleanupMenu(parentDropdownId);
        }
        setElementsWhitelisted(false);
      }
    };
  }, [
    cleanupMenu,
    elementsWhitelisted,
    isProfileBtn,
    menuInitialized,
    nestedElementsWhitelisted,
    parentDropdownId,
    props.menuId,
    whitelistElementRec,
  ]);

  useEffect(() => {}, []);

  return (
    <button
      ref={ref}
      className={`${classes["drop-btn"]} ${
        props.profile ? profileBtnClasses["profile-btn"] : ""
      } ${props.hamburger ? classes.hamburger : ""} ${props.className || ""}`}
      onClick={handleClick}
      id={props.id}
    >
      {props.profile ? <UserAvatar ref={profileBtnRef} /> : props.children}
    </button>
  );
};

export default DropDownButton;
