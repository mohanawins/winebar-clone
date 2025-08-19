// src/components/WineMenu.js
import React from "react";
import styles from "./WineMenu.module.css";

import wine1 from "../assets/wine1.jpg";
import wine2 from "../assets/wine2.jpg";
import wine3 from "../assets/wine3.jpg";

export default function WineMenu() {
  const wines = [
    {
      id: 1,
      name: "Wines of South Africa",
      price: "$40",
      image: wine1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
      id: 2,
      name: "Wines of South Africa",
      price: "$40",
      image: wine2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
      id: 3,
      name: "Wines of South Africa",
      price: "$40",
      image: wine3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Order Wine At Your Doorstep</h2>
      <div className={styles.grid}>
        {wines.map((wine) => (
          <div key={wine.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={wine.image} alt={wine.name} className={styles.img} />
            </div>
            <div className={styles.text}>
              <p className={styles.name}>{wine.name}</p>
              <p className={styles.price}>{wine.price}</p>
              <p className={styles.desc}>{wine.desc}</p>
              <a href="#" className={styles.button}>I WANT ONE</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
