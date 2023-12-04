import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Reservation from "./Pages/BookingPage";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import Confirmation from "./Pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
