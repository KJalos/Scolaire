import Logo from "../../Logo/Logo";
import NavItem from "./NavItem";
import classes from "./MainNavigation.module.css";
import { useContext, useEffect } from "react";
import Container from "../../Layout/Container";
import DropDownButton from "../Dropdown/DropdownButton";
import Dropdown from "../Dropdown/DropDown";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import MenuContext from "../../../store/menu-context";
import { useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import HamburgerDropdown from "../Dropdown/HamburgerDropdown";

const GROUP_MENU_ID = "group-menu";
const PROFILE_MENU_ID = "profile-menu";
const HAMBURGER_MENU_ID = "hamburger-menu";

const MainNavigation = () => {
  const location = useLocation();
  const activeRoute = location.pathname;
  const menuCtx = useContext(MenuContext);

  const { register, deregister } = menuCtx;
  useEffect(() => {
    const groupMenu = {
      id: GROUP_MENU_ID,
      dropdown: (
        <Dropdown className={classes.dropdown} id={GROUP_MENU_ID}>
          <NavItem destPath="/groups" dropElement>
            My&nbsp;Groups
          </NavItem>
          <NavItem destPath="/groups/chat" dropElement>
            Group&nbsp;Chat
          </NavItem>
        </Dropdown>
      ),
      visible: false,
      whitelist: [],
    };

    const profileMenu = {
      id: PROFILE_MENU_ID,
      dropdown: <ProfileDropdown id={PROFILE_MENU_ID} />,
      visible: false,
      whitelist: [],
    };

    const hamburgerMenu = {
      id: HAMBURGER_MENU_ID,
      dropdown: <HamburgerDropdown id={HAMBURGER_MENU_ID} nestedDropdowns={{ groupId: GROUP_MENU_ID }} />,
      visible: false,
      whitelist: [],
    };

    register(hamburgerMenu);
    register(profileMenu);
    register(groupMenu);
    return () => {
      deregister(HAMBURGER_MENU_ID);
      deregister(PROFILE_MENU_ID);
      deregister(GROUP_MENU_ID);
    };
  }, [register, deregister]);

  return (
    <nav className={`${classes.navbar}`}>
      <Container className={classes["navbar-container"]}>
        <div className={classes.brand}>
          <Logo className={classes.logo} />
          <h1 className={classes.name}>Scolaire</h1>
        </div>
        <ul className={`${classes["nav-items"]}`}>
          <NavItem destPath="/">Home</NavItem>
          <NavItem destPath="/schedule" active={activeRoute === "/schedule"}>
            Schedule
          </NavItem>
          {/* <NavItem destPath="/groups" active={activeRoute==='/groups'} onChangeRoute={handleChangeRoute}>Groups</NavItem> */}
          <DropDownButton
            id={"groupsDropDownBtn"}
            menuId={GROUP_MENU_ID}
            active={activeRoute === "/groups" || activeRoute === "/groups/chat"}
            dropdownId={GROUP_MENU_ID}
            dropdownOffset={{
              top: 5,
              left: 0,
            }}
          >
            Groups&nbsp;&nbsp;
            <i className={`fas fa-caret-down ${classes.avatar}`}></i>
          </DropDownButton>
          <NavItem destPath="/contact-us">Contact&nbsp;us</NavItem>
          <DropDownButton
            profile
            id="profileBtn"
            menuId={PROFILE_MENU_ID}
            active={
              activeRoute === "/profile" ||
              activeRoute === "/login" ||
              activeRoute === "/signup"
            }
            dropdownOffset={{
              top: 5,
              right: 0,
            }}
          ></DropDownButton>
        </ul>
        <DropDownButton
          id={"hamburgerBtn"}
          menuId={HAMBURGER_MENU_ID}
          dropdownOffset={{
            top: 0,
            right: 0,
          }}
        >
          <Hamburger
            className={classes.hamburger}
            menuId={HAMBURGER_MENU_ID}
          />
        </DropDownButton>
      </Container>
    </nav>
  );
};

export default MainNavigation;
