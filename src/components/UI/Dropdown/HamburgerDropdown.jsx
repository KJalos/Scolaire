import NavItem from "../NavBar/NavItem";
import Collapse from "./Collapse";
import Dropdown from "./DropDown";
import DropDownButton from "./DropdownButton";
import classes from "./HamburgerDropdown.module.css";

const HamburgerDropdown = (props) => {
  console.log(props.nestedDropdowns);
  return (
    <Dropdown id={props.id} className={classes["hamburger-dropdown"]}>
      <NavItem destPath={"/"} dropElement>
        Home
      </NavItem>
      <NavItem destPath={"/schedule"} dropElement>
        Schedule
      </NavItem>
      <Collapse
        menuId={props.id}
        elements={
          <>
            <NavItem destPath="/groups">My Groups</NavItem>
            <NavItem destPath="/groups/chat">Chat</NavItem>
          </>
        }
      >
        Groups
      </Collapse>
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
