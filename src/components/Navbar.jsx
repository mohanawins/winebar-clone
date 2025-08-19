import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; // keep your module or swap to Tailwind

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Left */}
        <div className={styles.navLeft}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            HOME
          </NavLink>
          {/* These two still scroll to sections on the Home page */}
          <a href="#history" className={styles.navLink}>HISTORY</a>
          <a href="#grills" className={styles.navLink}>GRILLS</a>
        </div>

        {/* Brand center */}
        <div className={styles.brand}>
          <div className={styles.brandCircle}>
            <h1 className={styles.brandName}>ROBERT'S</h1>
            <p className={styles.brandSubtitle}>Grills &amp; Wine Bar</p>
            <span className={styles.brandEst}>Est. 1845</span>
          </div>
        </div>

        {/* Right */}
        <div className={styles.navRight}>
          <a href="#wines" className={styles.navLink}>WINES</a>
          <a href="#events" className={styles.navLink}>EVENTS</a>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
          >
            CONTACT
          </NavLink>
        </div>
      </nav>

      {/* Floating buttons (keep or remove) */}
      <div className={styles.buttonContainer}>
        <button className={styles.primaryButton}>Buy Now</button>
        <button className={styles.secondaryButton}>Customize</button>
      </div>
    </header>
  );
}
