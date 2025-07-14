import React from "react";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-hero">
        <img
          src={assets.contact_img}
          alt="Our Team"
          className="aboutus-hero-img"
        />
        <div className="aboutus-overlay">
          <h1 className="aboutus-heading">Style. Substance. Soul.</h1>
          <p className="aboutus-subheading">
            Clothing that moves with you — and your story.
          </p>
        </div>
      </div>

      <div className="aboutus-content">
        <div className="aboutus-text">
          <h2>
            <span>♡</span> Who We Are
          </h2>
          <p>
            At Lily’s Brand, we believe in the beauty of detail. Founded with a
            passion for everyday fashion, we’re more than a clothing label —
            we’re a movement. Our pieces are designed for the bold, the
            effortless, and the self-expressive.
          </p>

          <h2>
            <span>♡</span> Our Philosophy
          </h2>
          <p>
            Sustainability, confidence, and individuality. From sketch to
            stitch, every item is produced with care for the planet and love for
            the people who wear them.
          </p>

          <h2>
            <span>♡</span> What Inspires Us
          </h2>
          <p>
            Whether you're dressing up or dressing down, our collections are
            crafted to fit your vibe. Soft fabrics, clean lines, bold statements
            — just like you.
          </p>
        </div>

        <div className="aboutus-side-image">
          <img
            src={assets.vivienne}
            alt="about us side image"
            className="aboutus-process-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
