import React from "react";
import styles from "./ContactPage.module.css";


const heroUrl = "src/assets/contact-hero.jpg";
const paperUrl = "src/assets/contact-texture.jpg";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      {/* ===== HERO ===== */}
      <section className={styles.hero} aria-label="Contact hero">
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${heroUrl})` }}
          aria-hidden="true"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.inner}>
          <p className={styles.kicker}>Get In Touch</p>
          <h1 className={styles.title}>Contact Us</h1>
          <div className={styles.rule} aria-hidden="true" />
        </div>
      </section>

      {/* ===== STRIPE: Left (details on parchment) + Right (form) ===== */}
      <section className={styles.strip} aria-label="Contact content">
        {/* LEFT: Contact details on parchment */}
        <aside
          className={styles.leftPane}
          style={{ backgroundImage: `url(${paperUrl})` }}
        >
          <div className={styles.leftInner}>
            <h2 className={styles.leftHeading}>Contact</h2>

            <div className={styles.block}>
              <p className={styles.label}>Email</p>
              <a href="mailto:contact@info.com" className={styles.link}>
                contact@info.com
              </a>
            </div>

            <div className={styles.block}>
              <p className={styles.label}>Phone:</p>
              <a href="tel:9292426868" className={styles.link}>
                929-242-6868
              </a>
            </div>

            <div className={styles.block}>
              <p className={styles.label}>Address</p>
              <a
                className={styles.link}
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps?q=31+West+Street,+London,+N04+1EI"
              >
                31 West Street, London, N04 1EI
              </a>
            </div>

            <div className={styles.block}>
              <p className={styles.label}>Opening Hours</p>
              <p className={styles.hours}>Mon - Sat: 11am – 11pm</p>
              <p className={styles.hours}>Sunday: 11am – 9.30pm</p>
            </div>
          </div>
        </aside>

        {/* RIGHT: Message Us form */}
        <div className={styles.rightPanel}>
          <div className={styles.panelInner}>
            <h2 className={styles.panelTitle}>Message Us</h2>
            <div className={styles.panelRule} aria-hidden="true" />

            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! (Connect to your backend / EmailJS / Formspree)");
              }}
            >
              {/* Name (First / Last) */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="first">Name <span className={styles.req}>*</span></label>
                  <input id="first" name="first" required />
                  <small className={styles.hint}>First</small>
                </div>
                <div className={styles.field}>
                  <label htmlFor="last" className={styles.invisible}>Last</label>
                  <input id="last" name="last" />
                  <small className={styles.hint}>Last</small>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email <span className={styles.req}>*</span></label>
                <input id="email" type="email" name="email" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">Subject <span className={styles.req}>*</span></label>
                <input id="subject" name="subject" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message <span className={styles.req}>*</span></label>
                <textarea id="message" name="message" rows="6" required />
              </div>

              <div className={styles.actions}>
                <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
