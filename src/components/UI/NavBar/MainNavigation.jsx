import Logo from "../../Logo/Logo";
import NavItem from "./NavItem";
import classes from "./MainNavigation.module.css";
import { useContext, useEffect, useState } from "react";
import Container from "../../Layout/Container";
import DropDownButton from "../Dropdown/DropdownButton";
import Dropdown from "../Dropdown/DropDown";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import MenuContext from "../../../store/menu-context";
import { useLocation } from "react-router-dom";

const GROUP_MENU_ID = "group-menu";
const PROFILE_MENU_ID = "profile-menu";

const MainNavigation = () => {
  const location = useLocation();
  const activeRoute = location.pathname;
  const menuCtx = useContext(MenuContext);

  const {register, deregister} = menuCtx;
  useEffect(()=>{
    const groupMenu = {
      id:GROUP_MENU_ID,
      dropdown:<Dropdown className={classes.dropdown} id={GROUP_MENU_ID}>
      <NavItem
        destPath="/groups"
      >
        My&nbsp;Groups
      </NavItem>
      <NavItem
        destPath="/groups/chat"
      >
        Group&nbsp;Chat
      </NavItem>
    </Dropdown>,
    visible:false,
    }

    const profileMenu = {
      id:PROFILE_MENU_ID,
      dropdown:<ProfileDropdown />,
    visible:false,
    }

    register(profileMenu);
    register(groupMenu);
    return () => {
      deregister(profileMenu)
      deregister(GROUP_MENU_ID);
    }
  },[register,deregister])



  return (
    <nav className={`${classes.navbar}`}>
      <Container className={classes["navbar-container"]}>
        <div className={classes.brand}>
          <Logo className={classes.logo} />
          <h1 className={classes.name}>Scolaire</h1>
        </div>
        <ul className={`${classes["nav-items"]}`}>
          <NavItem
            destPath="/"
            active={activeRoute === "/"}
          >
            Home
          </NavItem>
          <NavItem
            destPath="/schedule"
            active={activeRoute === "/schedule"}
          >
            Schedule
          </NavItem>
          {/* <NavItem destPath="/groups" active={activeRoute==='/groups'} onChangeRoute={handleChangeRoute}>Groups</NavItem> */}
          <DropDownButton
            id={"groupsDropDownBtn"}
            menuId={GROUP_MENU_ID}
            active={activeRoute === "/groups" || activeRoute === "/groups/chat"}
            dropdownId={GROUP_MENU_ID}
          >
            Groups&nbsp;&nbsp;
            <i className={`fas fa-caret-down ${classes.avatar}`}></i>
          </DropDownButton>
          <NavItem
            destPath="/contact-us"
            active={activeRoute === "/contact-us"}
          >
            Contact&nbsp;us
          </NavItem>
          <DropDownButton
            profile
            id="profileBtn"
            active={activeRoute === "/profile" || activeRoute === "/login"}
            dropdown={<ProfileDropdown />}
          />
        </ul>
      </Container>
    </nav>
  );
};

export default MainNavigation;
