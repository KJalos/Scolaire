import Container from "../Layout/Container";
import Input from "../UI/Forms/Input";

const Login = () => {
  return (
    <Container>
      <h2>Login</h2>
      <Input
        label="Username or Email"
        placeholder="Please enter your username or email"
      />
      <Input label="Password" placeholder="Please enter your password" />
    </Container>
  );
};

export default Login;
