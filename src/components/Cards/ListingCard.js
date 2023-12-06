import { Link } from 'react-router-dom';
import './Cards.css';

export default function ListingCard(props) {
  return (
    <article className="menu-card">
      <img src={props.image} alt="Listing Menu"></img>
      <section className="menu-card-content">
        <div className="title-container">
          <h1>{props.name}</h1>
          <h3>{props.price}</h3>
        </div>
        <p>{props.description}</p>
        <Link className="listing-button" to="/order">
          Order for Delivery
        </Link>
      </section>
    </article>
  );
}
