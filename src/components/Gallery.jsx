import React from "react";
import styles from "./Gallery.module.css";

/* Replace these with your actual images in src/assets */
import imgCheers from "../assets/gallery-cheers.jpg";
import imgPlate from "../assets/gallery-plate.jpg";
import imgToastEgg from "../assets/gallery-toast-egg.jpg";
import imgBottles from "../assets/gallery-bottles3.jpg";
import imgRoast from "../assets/gallery-roast.jpg";

export default function Gallery() {
  // Use style background images so we can cover & crop cleanly
  const tiles = {
    cheers: { backgroundImage: `url(${imgCheers})` },
    plate: { backgroundImage: `url(${imgPlate})` },
    toastEgg: { backgroundImage: `url(${imgToastEgg})` },
    bottles: { backgroundImage: `url(${imgBottles})` },
    roast: { backgroundImage: `url(${imgRoast})` },
  };

  return (
    <section className={styles.section} aria-label="Photo Gallery">
      <div className={styles.grid}>
        {/* Row 1: cheers | info | plate */}
        <div className={`${styles.tile} ${styles.cheers}`} style={tiles.cheers} role="img" aria-label="Guests toasting with wine" />
        <div className={`${styles.tile} ${styles.info}`}>
          <div className={styles.infoInner}>
            <div className={styles.rule} aria-hidden="true" />
            <h2 className={styles.title}>
              <span>PHOTO</span>
              <span>GALLERY</span>
            </h2>
            <button className={styles.circleBtn} aria-label="Open gallery">
              <span className="sr-only">Open gallery</span>
              ○
            </button>
          </div>
        </div>
        <div className={`${styles.tile} ${styles.plate}`} style={tiles.plate} role="img" aria-label="Gourmet plate" />

        {/* Row 2: toastEgg | bottles | roast */}
        <div className={`${styles.tile} ${styles.toastEgg}`} style={tiles.toastEgg} role="img" aria-label="Toast with egg" />
        <div className={`${styles.tile} ${styles.bottles}`} style={tiles.bottles} role="img" aria-label="Bar bottles" />
        <div className={`${styles.tile} ${styles.roast}`} style={tiles.roast} role="img" aria-label="Roast platter" />
      </div>
    </section>
  );
}
