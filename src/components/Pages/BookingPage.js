import BookingForm from "../Sections/BookingForm";
import { useState, useEffect } from "react";
import { fetchAPI } from "../../bookingsAPI";

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    fetchTimes(currentDate);
  }, []);

  function fetchTimes(date) {
    const output = fetchAPI(date);
    setAvailableTimes(output);
  }

  function updateTimes(date) {
    fetchTimes(date);
  }

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </>
  );
}
