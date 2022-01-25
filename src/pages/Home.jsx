import { useEffect } from "react";
import Landing from "../components/Landing/Landing";

const Home = () => {
  useEffect(() => {
    document.title = "Scolaire | Home";
  }, []);
  return <Landing />;
};

export default Home;
