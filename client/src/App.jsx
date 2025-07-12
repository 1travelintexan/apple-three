import "./App.css";
import MyCalendar from "./compenents/MyCalendar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PricesPage } from "./pages/PricesPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Link } from "react-router-dom";
import appleLogo from "./assets/apple-logo.png";
function App() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={appleLogo} alt="logo" className="nav-logo" />
        </Link>
        <h3>Welcome to Apple 3</h3>
        <section>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
          <Link to="/prices">
            <button>Prices</button>
          </Link>
          <Link to="/calendar">
            <button>Check Avaliabilty </button>
          </Link>
        </section>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
