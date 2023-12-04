import BookingForm from "../Sections/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
