import classes from "./Footer.module.css";
import NavItem from "./NavBar/NavItem";
import Logo from "../Logo/Logo";
import Container from "../Layout/Container";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* Sitemap*/}
      <Container className={classes.container}>
        <div className={classes.sitemap}>
          <NavItem destPath={"/"} dropElement>
            Home
          </NavItem>
          <NavItem destPath={"/schedule"} dropElement>
            Schedule
          </NavItem>
          {/* <NavItem destPath={"/groups"} dropElement>
            My Groups
          </NavItem>
          <NavItem destPath={"/groups/chat"} dropElement>
            Group Chat
          </NavItem> */}
          <NavItem destPath={"/contact-us"} dropElement>
            Contact us
          </NavItem>
          <NavItem destPath={"/profile"} dropElement>
            My Profile
          </NavItem>
          <NavItem destPath={"/logout"} dropElement>
            Logout
          </NavItem>
        </div>
        {/* Contact details */}
        <div className={classes["contact-details"]}>
          <h3>Contact Details</h3>
          <p>
            <i className="fas fa-envelope"></i> scolaire@gmail.com
          </p>
        </div>
      </Container>
      <Logo className={classes.logo} />
      {/* Copyright */}
      <p className={classes.copy}>Copyright &copy; 2022</p>
    </footer>
  );
};

export default Footer;
