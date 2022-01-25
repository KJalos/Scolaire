import { useEffect } from "react";
import Container from "../components/Layout/Container";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Page not found";
  }, []);
  return <Container>
    <h1 className="page-title">404 | Page not found</h1>
  </Container>;
};

export default NotFound;
