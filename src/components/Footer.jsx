import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css"; // Import CSS Module

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Contact Info */}
      <div className={styles.contact}>
        <h3>Contact Us:</h3>
        <p>+1 234 657 890</p>
      </div>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <a href="#" className={styles.icon}>
          <FaInstagram size={20} />
        </a>
        <a href="#" className={styles.icon}>
          <FaFacebook size={20} />
        </a>
        <a href="#" className={styles.icon}>
          <FaTwitter size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className={styles.copyright}>
        Copyright © 2025 Wine Bar and Restaurant
      </p>
    </footer>
  );
}

export default Footer;
