import "./App.css";
import MyCalendar from "./components/MyCalendar";
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
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
