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
  //console.log(menus)
  useEffect(() => {
    const listener = (event) => {
      let targetIsExempt = false;
      let hasVisibleMenu =false;
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].visible) {
          hasVisibleMenu = true;
          // console.log(menus[i].id,"is visible.");
          // console.log("Clicked element:",event.target);
          // console.log("Menu whitelist",menus[i].whitelist);
          for (let j = 0; j < menus[i].whitelist.length; j++) {
            // console.log("Comparison with",menus[i].whitelist[j],":",event.target===menus[i][j]);
            if (event.target===menus[i].whitelist[j]) {
              targetIsExempt = true;
            }
          }
        }
      }
      if (!targetIsExempt && hasVisibleMenu) {
        console.log("Conditions met to close all menus")
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
