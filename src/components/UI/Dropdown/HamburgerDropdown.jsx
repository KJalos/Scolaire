import NavItem from "../NavBar/NavItem";
import Dropdown from "./DropDown";
import DropDownButton from "./DropdownButton";
import classes from "./HamburgerDropdown.module.css"

const HamburgerDropdown = (props) => {
  console.log(props.nestedDropdowns)
  return (
    <Dropdown id={props.id} className={classes["hamburger-dropdown"]}>
      <NavItem destPath={"/"} dropElement>
        Home
      </NavItem>
      <NavItem destPath={"/schedule"} dropElement>
        Schedule
      </NavItem>
      <DropDownButton
        id={"groupsDropDownBtn"}
        menuId={props.nestedDropdowns.groupId}
        dropdownOffset={{
          top: 0,
          left: 0,
        }}
        dropElement
        parentDropdownId={props.id}
      >
        Groups
      </DropDownButton>
      <NavItem destPath={"/contact-us"} dropElement>
        Contact us
      </NavItem>
      <NavItem destPath={"/profile"} dropElement>
        My Profile
      </NavItem>
      <NavItem destPath={"/logout"} dropElement>
        Logout
      </NavItem>
    </Dropdown>
  );
};

export default HamburgerDropdown;
