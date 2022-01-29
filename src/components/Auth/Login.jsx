import Container from "../Layout/Container";
import Button from "../UI/Forms/Button";
import Input from "../UI/Forms/Input";
import classes from "../UI/Forms/Forms.module.css";
import OAuthButtons from "./OAuthButtons";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container className={classes.container}>
      <h2>Login</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          label="Username or Email"
          type="text"
          placeholder="Please enter your username or email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Please enter your password"
        />
        <Button>Login</Button>
        {/* Forgot password */}
        {/* Signup */}
      </form>
      <OAuthButtons className={classes["oauth-form"]} />
    </Container>
  );
};

export default Login;
