import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";

const MainNavigation = () => {
  return (
    <nav>
      <Logo />
      <h1>Scolaire</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          {/* DropDown */}
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
