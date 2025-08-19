import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.subtitle}>Est. 1845</p>
        <h1 className={styles.title}>Oldest Bar In London</h1>
        <button className={styles.button}>Book A Table</button>
      </div>
    </section>
  );
}
