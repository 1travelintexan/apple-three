import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import cherryLogo from "../assets/cherry3-logo-2.png";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={cherryLogo} alt="logo" className="nav-logo" />
      </Link>
      <section>
        <Link to="/contact">
          <Button variant="outlined">Contact Us</Button>
        </Link>
        <Link to="/prices">
          <Button variant="outlined">Prices</Button>
        </Link>
        <Link to="/calendar">
          <Button variant="outlined">Check Availability</Button>
        </Link>
        <Link to="/faq">
          <Button variant="outlined">FAQ</Button>
        </Link>
        <Link to="/signup">
          <Button variant="outlined">Signup</Button>
        </Link>
        <Link to="/login">
          <Button variant="outlined">Login</Button>
        </Link>
      </section>
    </nav>
  );
};
export default Navbar;
