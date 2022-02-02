import Button from "../Forms/Button";
import Dropdown from "./DropDown";
import classes from "./ProfileDropdown.module.css";

const ProfileDropdown = (props) => {
  // //console.log("PROPS:",props);
  return (
    <Dropdown className={classes.dropdown} id={props.id}>
      <p className={classes.username}>Username</p>
      <Button>My Profile</Button>
      <Button outline>Logout</Button>
    </Dropdown>
  );
};

export default ProfileDropdown;
