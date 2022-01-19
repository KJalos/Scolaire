import Logo from "../../Logo/Logo";
import NavItem from "./NavItem";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={`${classes.navbar}`}>
      <Logo />
      <h1>Scolaire</h1>
      <ul className={`${classes["nav-items"]}`}>
        <NavItem destPath="/">Home</NavItem>
        <NavItem destPath="/schedule">Schedule</NavItem>
        <NavItem destPath="/groups">Groups</NavItem>
        <NavItem destPath="/contact-us">Contact us</NavItem>
      </ul>
    </nav>
  );
};

export default MainNavigation;

/* <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li> */
