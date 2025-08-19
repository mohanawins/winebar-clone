import React from "react";
import styles from "./MenuPage.module.css";

// Import your background images (replace with actual paths)
import barMenuBg from "../assets/bg-03-free-img.jpg";
import foodMenuBg from "../assets/bg-04-free-img.jpg";

export default function MenuPage() {
  return (
    <section className={styles.menuSection}>
      <div className={styles.menuContainer}>
        <div className={styles.menuColumns}>
          {/* Bar Menu Column with Background */}
          <div 
            className={`${styles.menuColumn} ${styles.barMenuColumn}`}
            style={{ backgroundImage: `url(${barMenuBg})` }}
          >
            <div className={styles.menuContentOverlay}>
              <h2 className={styles.menuTitle}>BAR MENU</h2>
              <div className={styles.menuContent}>
                <p>LOREM IPSUM DOLOR SIT AMET,</p>
                <p>CONSECTETUR ADIPISICING ELIT SED DO</p>
                <p>EIUSMOD TEMPOR</p>
                <button className={styles.wineButton}>VIEW OUR WINES</button>
              </div>
            </div>
          </div>
          
          <div className={styles.divider}></div>
          
          {/* Food Menu Column with Background */}
          <div 
            className={`${styles.menuColumn} ${styles.foodMenuColumn}`}
            style={{ backgroundImage: `url(${foodMenuBg})` }}
          >
            <div className={styles.menuContentOverlay}>
              <h2 className={styles.menuTitle}>FOOD MENU</h2>
              <div className={styles.menuContent}>
                <p>LOREM IPSUM DOLOR SIT AMET,</p>
                <p>CONSECTETUR ADIPISICING ELIT SED DO</p>
                <p>EIUSMOD TEMPOR</p>
                <button className={styles.foodButton}>VIEW OUR FOODS</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* <button className={styles.wineButton}>VIEW OUR FOODS</button> */}
      </div>
    </section>
  );
}