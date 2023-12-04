import React from 'react';
import Headsection from "../Sections/HeadSection";
import Listing from "../Sections/ListingSection";
import Testimonials from "../Sections/TestimoniSection";
import About from "../Sections/AboutSection";

export default function Main() {
  return (
    <>
        <Headsection />
        <Listing />
        <Testimonials />
        <About />
    </>
  );
}


