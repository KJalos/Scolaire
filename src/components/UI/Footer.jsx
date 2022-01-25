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
          <NavItem destPath={"/home"}>Home</NavItem>
          <NavItem destPath={"/schedule"}>Schedule</NavItem>
          <NavItem destPath={"/groups"}>My Groups</NavItem>
          <NavItem destPath={"/groups/chat"}>Group Chat</NavItem>
          <NavItem destPath={"/contact-us"}>Contact us</NavItem>
          <NavItem destPath={"/profile"}>My Profile</NavItem>
          <NavItem destPath={"/logout"}>Logout</NavItem>
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
