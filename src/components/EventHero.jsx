import React from "react";
import styles from "./EventHero.module.css";

// Replace with your own background (put it in src/assets/)
import bgImage from "../assets/hero-event.jpg";

export default function EventHero() {
  return (
    <section className={styles.hero} aria-label="Host an Event or Book a Table">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.rule} aria-hidden="true" />
        <h1 className={styles.title}>
          <span>Host an Event Or</span>
          <span>Book a Table</span>
        </h1>

        <p className={styles.subtitle}>
          Whether you're looking for a great place to have a nice dinner or you
          want to celebrate an event, we are the perfect place.
        </p>

        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            Host an Event
          </button>
          <button className={`${styles.btn} ${styles.btnGhost}`}>
            Book a Table
          </button>
        </div>
      </div>
    </section>
  );
}
