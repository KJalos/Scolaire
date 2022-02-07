import { useNavigate } from "react-router-dom";
import Button from "../Forms/Button";
import Dropdown from "./DropDown";
import classes from "./ProfileDropdown.module.css";

const ProfileDropdown = (props) => {
  // //console.log("PROPS:",props);
  // Check store to check whether user is logged in or not

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile")
  }

  const handleLogout = () =>{
    // dispatch logout action
    // navigate to login page
  }

  return (
    <Dropdown className={classes.dropdown} id={props.id}>
      <p className={classes.username}>Username</p>
      <Button onClick={handleProfileClick}>My Profile</Button>
      <Button onClick={handleLogout} outline>Logout</Button>
    </Dropdown>
  );
};

export default ProfileDropdown;
