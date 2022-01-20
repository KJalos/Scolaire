import { Fragment } from "react/cjs/react.production.min";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Container from "./Container";

const Layout = (props) => {
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Content */}
      <Container>{props.children}</Container>
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
