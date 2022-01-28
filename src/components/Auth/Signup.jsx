
import Container from "../Layout/Container";
import Button from "../UI/Forms/Button";
import Checkbox from "../UI/Forms/Checkbox";
import Input from "../UI/Forms/Input";
import classes from "../UI/Forms/Forms.module.css";
import OAuthButtons from "./OAuthButtons";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container className={classes.container}>
      <h2>Signup</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="Please enter your email"
        />
        <Input
          label="Username"
          type="text"
          placeholder="Please enter your username"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Please enter your password"
        />
        <Checkbox label="I am not a robot" />
        <Button>Signup</Button>
        {/* Forgot password */}
        {/* Signup */}
      </form>
      <OAuthButtons className={classes["oauth-form"]} />
    </Container>
  )
};

export default Signup;
