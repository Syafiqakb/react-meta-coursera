import React from 'react';
import ListingCard from '../Cards/ListingCard';
// import Carousel from './Carousel'; // Assuming you have a Carousel component

import GreekSalad from "../../assets/images/greek salad.jpg";
import Bruschetta from "../../assets/images/bruchetta.png";
import LemonDessert from "../../assets/images/lemon dessert.jpg";


export default function Listing() {
    return (
        <section className="listing">
            <article className="listing-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../assets/images/restauranfood.jpg')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="listing-cards">
                <ListingCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <ListingCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <ListingCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>

            <section className="listing-carousel">
                {/* <Carousel /> */}
            </section>
        </section>
    );
}