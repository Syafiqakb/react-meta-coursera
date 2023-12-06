import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sections.css";

export default function BookingForm(props) {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comments, setComments] = useState("");
  const [finalTime, setFinalTime] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFinalTime(
      props.availableTimes.map((times) => (
        <option key={times}>{times}</option>
      ))
    );
  }, [props.availableTimes]);

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.updateTimes(selectedDate);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name,
      guest,
      date,
      occasion,
      comments,
    };

    const submissionResult = submitAPI(formData);
    if (submissionResult) {
      navigate("../ConfirmedBooking");
    } else {
      console.error("Form submission failed");
    }
  }

  return (
    <form className="reservation-form" data-testid="booking-form" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-side">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="First Name"
              required
              minLength={2}
              maxLength={50}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="guest">Number of Guests</label>
            <input
              type="number"
              id="guest"
              placeholder="Number of Guests"
              value={guest}
              required
              min={1}
              max={100}
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-side">
          <div>
            <label htmlFor="date">Select Date</label>
            <input
              type="date"
              id="date"
              required
              value={date}
              onChange={handleDateChange}
            />
          </div>

          <div>
            <label htmlFor="time">Select Time</label>
            <select id="time" required>
              {finalTime}
            </select>
          </div>
        </div>
      </div>

      <div className="form-comments">
        <label htmlFor="comments">Additional Comments</label>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>

      <div className="form-actions">
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button type="submit" className="action-button">
          Book Table
        </button>
      </div>
    </form>
  );
}

function submitAPI(formData) {
  console.log("Form data submitted:", formData);
  return true;
}