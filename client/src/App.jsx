import "./App.css";
import MyCalendar from "./pages/calendar/MyCalendar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PricesPage } from "./pages/PricesPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FAQ } from "./pages/FAQ";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { useEffect, useState } from "react";
function App() {
  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {
    setAuthToken(localStorage.getItem("authToken"));
  }, []);
  function handleLogout() {
    setAuthToken(null);
    localStorage.removeItem("authToken");
  }
  return (
    <>
      <Navbar authToken={authToken} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={<Signup setAuthToken={setAuthToken} />}
        />
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
