import { Routes, Route } from "react-router-dom";
import Home from "./Main/Main";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/BookingPage";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import Confirmation from "./Pages/ConfirmedBooking";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmedbooking" element={<Confirmation />} />
    </Routes>
  );
}
