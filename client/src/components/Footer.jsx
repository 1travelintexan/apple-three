import { Link } from "react-router-dom";
import { Map } from "./Map";
export const Footer = () => {
  return (
    <footer>
      <section>
        <Link to="/">Home</Link>
        <Link to="/prices">Prices</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/calendar">Book Now</Link>
        <Link to="/faq">FAQ</Link>
        <p>
          Address: <br />
          123 Amarillo Way Amarillo, TX 77333
        </p>
        <p>
          Phone: <br />
          (123) 456 - 7899
        </p>
      </section>
      <Map />
    </footer>
  );
};
