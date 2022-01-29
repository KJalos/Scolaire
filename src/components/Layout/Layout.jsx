import Footer from "../UI/Footer";
import Header from "../UI/Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.wrapper}>
      {/* Header */}
      <Header />
      {/* Content */}
      <main>{props.children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
