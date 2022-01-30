import React, { Fragment, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Schedule from "./pages/Schedule";
import MenuContext from "./store/menu-context";
import Design from "./TestPages/Design";

let eventAdded = false;
function App() {
  // Handle menus
  const { menus, hideAll } = useContext(MenuContext);

  useEffect(() => {
    const listener = (event) => {
      if (
        menus.reduce((result, menu) => {
          console.log("Menu", menu.id, "whitelist:", menu.whitelist);
          return (
            result ||
            (menu.visible &&
              !menu.whitelist.reduce((isExempt, element) => {
                console.log(
                  "Clicked",
                  event.target,
                  "\nTarget",
                  element,
                  "\nPrev Value",
                  isExempt
                );
                console.log("New value", event.target === element);
                return isExempt || event.target === element;
              }, false))
          );
        }, false)
      ) {
        // console.log("Clicked outside");
        console.log("Clicked:", event.target);
        console.log("Hiding Menus");
        hideAll();
      }
    };
    if (!eventAdded) {
      eventAdded = true;
      document.addEventListener("click", listener);
    }
    return () => {
      document.removeEventListener("click", listener);
      eventAdded = false;
    };
  }, [hideAll, menus]);

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home title="Scolaire | Home" />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/TEST" element={<Design />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      {menus.map(
        (menu) =>
          menu.visible &&
          ReactDOM.createPortal(
            menu.dropdown,
            document.getElementById("overlays")
          )
      )}
    </Fragment>
  );
}

export default App;
