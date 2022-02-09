import Container from "../Layout/Container";
import Input from "../UI/Forms/Input";
import defaultPageStyles from "../Layout/DefaultPageStyles.module.css";
import Button from "../UI/Forms/Button";
import classes from "./ContactUs.module.css";
import { useReducer, useRef } from "react";
import emailjs from "emailjs-com";

const [SET_NAME, SET_EMAIL, SET_MESSAGE] = [
  "SET_NAME",
  "SET_EMAIL",
  "SET_MESSAGE",
];

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.value,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.value,
      };
    default:
      return state;
  }
};

const ContactUs = () => {
  const ref = useRef();
  const [contactFormState, dispatch] = useReducer(contactFormReducer, {
    name: "",
    email: "",
    message: "",
  });
  const handleNameChange = (event) => {
    const { value } = event.target;
    dispatch({
      type: SET_NAME,
      value,
    });
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    dispatch({
      type: SET_EMAIL,
      value,
    });
  };

  const handleMessageChange = (event) => {
    const { value } = event.target;
    dispatch({
      type: SET_MESSAGE,
      value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // make API call to send message
    emailjs
      .sendForm(
        "service_7jjwuuq",
        "template_gwk37if",
        event.target,
        "user_AKWthTAr5lhpYyptgianK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // event.target.reset();
  };

  return (
    <Container className={defaultPageStyles["main-container"]}>
      <h2>Contact us</h2>
      <form
        className={classes["contact-form"]}
        onSubmit={handleSubmit}
        ref={ref}
      >
        <Input
          label="Name"
          name="from_name"
          type="text"
          placeholder="Please enter your name"
          value={contactFormState.name}
          onChange={handleNameChange}
        />
        <Input
          label="Email"
          name="reply_to"
          type="email"
          placeholder="Please enter your email"
          value={contactFormState.email}
          onChange={handleEmailChange}
        />
        <Input
          label="Message"
          name="message"
          placeholder="Please enter your message..."
          textarea
          value={contactFormState.message}
          onChange={handleMessageChange}
        />
        <Button className={classes.button}>Submit message</Button>
      </form>
    </Container>
  );
};

export default ContactUs;
