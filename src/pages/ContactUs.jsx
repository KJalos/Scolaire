import { useEffect } from "react";
import ContactUsContent from "../components/Contact/ContactUs";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Scolaire | Contact us";
  }, []);
  return <ContactUsContent />;
};

export default ContactUs;
