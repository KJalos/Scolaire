import Container from "../Layout/Container";
import Button from "../UI/Forms/Button";
import Input from "../UI/Forms/Input";
import formClasses from "../UI/Forms/Forms.module.css";

const ContactUs = () => {
  return (
    <Container className={formClasses.container}>
      <h2>Get in touch</h2>
      <form className={formClasses.form}>
        <Input label="Name" type="text" />
        <Input label="Email" type="email" />
        <Input label="Message" textarea />
        <Button>Submit</Button>
      </form>
    </Container>
  );
};

export default ContactUs;
