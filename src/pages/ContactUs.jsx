import { Fragment, useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Scolaire | Contact us";
  }, []);
  return (
    <Fragment>
      <p>In development...</p>
    </Fragment>
  );
};

export default ContactUs;
