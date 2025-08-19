import React from "react";
import styles from "./History.module.css";
import bgImage from "../assets/bg-02-free-img.jpg";

export default function History() {
  return (
    <section className={styles.history}>
      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.subtitle}>History</p>
        <h2 className={styles.title}>175 Years of Service</h2>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className={styles.subtext}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.
        </p>

        <button className={styles.button}>MORE ABOUT US</button>
      </div>
    </section>
  );
}
