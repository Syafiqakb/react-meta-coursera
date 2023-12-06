import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h3>A confirmation message has been sent to your email.</h3>
        <h3>Thanks for dining with us!</h3>
      </section>

      <section className="redirect-buttons">
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
