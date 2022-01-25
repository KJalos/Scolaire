import Logo from "../../Logo/Logo";
import NavItem from "./NavItem";
import classes from "./MainNavigation.module.css";
import { useState } from "react";
import Container from "../../Layout/Container";
import DropDownButton from "../Dropdown/DropdownButton";
import Dropdown from "../Dropdown/DropDown";
import ProfileButton from "../Dropdown/ProfileButton";
import ProfileDropdown from "../Dropdown/ProfileDropdown";

const MainNavigation = () => {
  const [activeRoute, setActiveRoute] = useState("/");

  const handleChangeRoute = (route) => {
    setActiveRoute(route);
  };

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
            onChangeRoute={handleChangeRoute}
          >
            Home
          </NavItem>
          <NavItem
            destPath="/schedule"
            active={activeRoute === "/schedule"}
            onChangeRoute={handleChangeRoute}
          >
            Schedule
          </NavItem>
          {/* <NavItem destPath="/groups" active={activeRoute==='/groups'} onChangeRoute={handleChangeRoute}>Groups</NavItem> */}
          <DropDownButton
            id={"groupsBtn"}
            active={activeRoute === "/groups" || activeRoute === "/groups/chat"}
            dropdown={
              <Dropdown className={classes.dropdown}>
                <NavItem
                  destPath="/groups"
                  active={activeRoute === "/groups"}
                  onChangeRoute={handleChangeRoute}
                >
                  My&nbsp;Groups
                </NavItem>
                <NavItem
                  destPath="/groups"
                  active={activeRoute === "/groups"}
                  onChangeRoute={handleChangeRoute}
                >
                  Group&nbsp;Chat
                </NavItem>
              </Dropdown>
            }
          >
            Groups&nbsp;&nbsp;<i className={`fas fa-caret-down ${classes.avatar}`}></i>
          </DropDownButton>
          <NavItem
            destPath="/contact-us"
            active={activeRoute === "/contact-us"}
            onChangeRoute={handleChangeRoute}
          >
            Contact&nbsp;us
          </NavItem>
          <ProfileButton
            id="profileBtn"
            active={activeRoute === "/groups" || activeRoute === "/groups/chat"}
            dropdown={
              <ProfileDropdown />
            }
          />
        </ul>
      </Container>
    </nav>
  );
};

export default MainNavigation;
