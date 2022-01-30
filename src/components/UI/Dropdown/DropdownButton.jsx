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
  const { whitelistElement, blacklistElement, hide, show, hideAll } = menuCtx;
  const menu = menuCtx.menus.find((menu) => menu.id === props.menuId);
  const [elementsWhitelisted, setElementsWhitelisted] = useState(false);

  const handleClick = useCallback(
    (event) => {
      if (menu && menu.visible) {
        // console.log("hiding menu", menu);
        hide(menu.id);
      } else {
        // console.log("showing menu", menu);
        hideAll();
        console.log(menu.id, ref.current.getBoundingClientRect());
        console.log(
          ref.current.getBoundingClientRect().right + props.dropdownOffset.right
        );
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
      hideAll,
      show,
      props.dropdownOffset.left,
      props.dropdownOffset.right,
      props.dropdownOffset.top,
    ]
  );

  const { profile: isProfileBtn } = props;
  useEffect(() => {
    // TODO check whether element has changed

    if (!elementsWhitelisted && menu) {
      if (ref.current) {
        //iterate through all children (including nested children) of button
        (function whitelistChidlren(element) {
          if (element.children.length > 0) {
            const children = element.children;
            for (let i = 0; i < children.length; i++) {
              whitelistChidlren(children[i]);
            }
          }
          whitelistElement(props.menuId, element);
          // console.log("click event added on:", element);
          // console.log("Children", element.children);
        })(ref.current);
      }
      setElementsWhitelisted(true);
    }
    if (isProfileBtn)
      profileBtnRef.current.addEventListener("click", handleClick);
    else ref.current.addEventListener("click", handleClick);

    return () => {
      // blacklistElement(menu.id,ref.current);
      // blacklistElement(menu.id,profileContainer.current);
      if (ref.current && elementsWhitelisted) {
        //iterate through all children (including nested children) of button
        (function blacklistChildren(element) {
          if (element.children.length > 0) {
            const children = element.children;
            for (let i = 0; i < children.length; i++) {
              blacklistChildren(children[i]);
            }
          }
          blacklistElement(props.menuId, element);
          // console.log("click event removed from:", element);
          // eslint-disable-next-line react-hooks/exhaustive-deps
        })(ref.current);
        setElementsWhitelisted(false);
      }
      if (isProfileBtn) {
        if (profileBtnRef.current)
          // eslint-disable-next-line react-hooks/exhaustive-deps
          profileBtnRef.current.removeEventListener("click", handleClick);
      } else if (ref.current)
        ref.current.removeEventListener("click", handleClick);
    };
  }, [
    menu,
    whitelistElement,
    ref,
    props.menuId,
    blacklistElement,
    hide,
    show,
    hideAll,
    elementsWhitelisted,
    isProfileBtn,
    handleClick,
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
