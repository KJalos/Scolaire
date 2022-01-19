import { Fragment } from "react/cjs/react.production.min";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const Layout = (props) => {
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Content */}
      {props.children}
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
