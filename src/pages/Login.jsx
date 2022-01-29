
import { useEffect } from "react";
import LoginContent from "../components/Auth/Login"

const Login = () => {
  useEffect(()=>{
    document.title ="Scolaire | Login"
  },[]);

  return <LoginContent />;
}

export default Login