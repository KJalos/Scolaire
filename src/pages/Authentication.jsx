import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const Authentication = () => {
  useEffect(() => {
    document.title = "You should not be here";
  }, []);
  return (
    <Fragment>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" />
      </Routes>
    </Fragment>
  );
};

export default Authentication;
