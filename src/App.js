import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Authentication from "./pages/Authentication";
import ContactUs from "./pages/ContactUs";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Schedule from "./pages/Schedule";
import Design from "./TestPages/Design";

function App() {
  // Handle menus
  

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home title="Scolaire | Home" />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/TEST" element={<Design />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
