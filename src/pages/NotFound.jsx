import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Page not found";
  }, []);
  return <h1 className="page-title">404 | Page not found</h1>;
};

export default NotFound;
