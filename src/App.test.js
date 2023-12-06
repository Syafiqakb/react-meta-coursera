import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/Sections/BookingForm";
import { BrowserRouter as Router } from 'react-router-dom';

describe("BookingForm Component", () => {
  test("renders BookingForm component", () => {
    render(
    <Router>
      <BookingForm availableTimes={[]} updateTimes={() => {}} />
    </Router>);
    const formElement = screen.getByTestId("booking-form");
    expect(formElement).toBeInTheDocument();
  });

  test("updates state on input change", () => {

    render(
    <Router>
      <BookingForm availableTimes={[]} updateTimes={() => {}} />
    </Router>);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");

    const guestInput = screen.getByLabelText(/Number of Guests/i);
    fireEvent.change(guestInput, { target: { value: 5 } });
    expect(guestInput.value).toBe("5");

    const dateInput = screen.getByLabelText(/Select Date/i);
    fireEvent.change(dateInput, { target: { value: "2023-12-31" } });
    expect(dateInput.value).toBe("2023-12-31");

    const occasionInput = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });
    expect(occasionInput.value).toBe("Birthday");

    const commentsInput = screen.getByLabelText(/Additional Comments/i);
    fireEvent.change(commentsInput, { target: { value: "Test comments" } });
    expect(commentsInput.value).toBe("Test comments");
  });

  test("calls updateTimes function on date change", () => {
    const updateTimesMock = jest.fn();
    render(
      <Router>
        <BookingForm availableTimes={[]} updateTimes={updateTimesMock} />
      </Router>);
    const dateInput = screen.getByLabelText(/Select Date/i);
    fireEvent.change(dateInput, { target: { value: "2023-12-31" } });
    expect(updateTimesMock).toHaveBeenCalledWith("2023-12-31");
  });
});
