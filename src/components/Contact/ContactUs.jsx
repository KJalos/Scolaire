import Container from "../Layout/Container";
import Input from "../UI/Forms/Input";
import defaultPageStyles from "../Layout/DefaultPageStyles.module.css";
import Button from "../UI/Forms/Button";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <Container className={defaultPageStyles["main-container"]}>
      <h2>Contact us</h2>
      <form className={classes["contact-form"]}>
        <Input label="Name" type="text" placeholder="Please enter your name" />
        <Input
          label="Email"
          type="email"
          placeholder="Please enter your email"
        />
        <Input label="Message" placeholder="Please enter your message..." textarea/>
        <Button className={classes.button}>Submit message</Button>
      </form>
    </Container>
  );
};

export default ContactUs;
