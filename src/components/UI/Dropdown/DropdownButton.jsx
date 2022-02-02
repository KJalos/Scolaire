import React, {
  useCallback,
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
  const { whitelistElementRec, blacklistElementRec, hide, show, hideAll } =
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

  const handleClick = useCallback(
    (event) => {
      if (menu && menu.visible) {
        hide(menu.id);
      } else {
        if (!parentDropdownId) hideAll();
        else console.log(props.menuId)
        show(menu.id, {
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
    },
    [
      menu,
      hide,
      parentDropdownId,
      hideAll,
      show,
      props.dropdownOffset.left,
      props.dropdownOffset.right,
      props.dropdownOffset.top,
      props.dropdownOffset.bottom,
    ]
  );

  useEffect(() => {
    if (!elementsWhitelisted && menu) {
      if (ref.current) {
        whitelistElementRec(props.menuId, ref.current);
      }
      setElementsWhitelisted(true);
    }

    if (!nestedElementsWhitelisted) {
      if (ref.current) {
        if (parentDropdownId) {
          console.log("Parent", parentDropdownId);
          console.log(ref.current);
          whitelistElementRec(parentDropdownId, ref.current);
          console.log(
            menuCtx.menus.find((menu) => menu.id === parentDropdownId)
          );
        }
        setNestedElementsWhitelisted(true);
      }
    }
    if (isProfileBtn)
      profileBtnRef.current.addEventListener("click", handleClick);
    else ref.current.addEventListener("click", handleClick);

    return () => {
      if (ref.current && elementsWhitelisted) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        blacklistElementRec(props.menuId, ref.current);
        if (parentDropdownId) {
          console.log("Parent", parentDropdownId);
          console.log(ref.current);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          blacklistElementRec(parentDropdownId, ref.current);
        }
        setElementsWhitelisted(false);
      }
      if (isProfileBtn) {
        if (profileBtnRef.current)
          // eslint-disable-next-line react-hooks/exhaustive-deps
          profileBtnRef.current.removeEventListener("click", handleClick);
      } else if (ref.current)
        ref.current.removeEventListener("click", handleClick);
      if (nestedElementsWhitelisted) {
        if (ref.current) {
          if (parentDropdownId) {
            console.log("Parent", parentDropdownId);
            console.log(ref.current);
            whitelistElementRec(parentDropdownId, ref.current);
            setNestedElementsWhitelisted(false);
          }
        }
      }
    };
  }, [
    menu,
    whitelistElementRec,
    ref,
    props.menuId,
    blacklistElementRec,
    hide,
    show,
    hideAll,
    elementsWhitelisted,
    isProfileBtn,
    handleClick,
    parentDropdownId,
  ]);

  return (
    <button
      ref={ref}
      className={`${classes["drop-btn"]} ${
        props.profile ? profileBtnClasses["profile-btn"] : ""
      } ${props.className}`}
    >
      {props.profile ? <UserAvatar ref={profileBtnRef} /> : props.children}
    </button>
  );
};

export default DropDownButton;
