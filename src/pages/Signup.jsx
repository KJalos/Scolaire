import { useEffect } from "react";
import SignupContent from "../components/Auth/Signup";

const Signup = () => {
  useEffect(() => {
    document.title = "Scolaire | Login";
  }, []);

  return <SignupContent />;
};

export default Signup;
